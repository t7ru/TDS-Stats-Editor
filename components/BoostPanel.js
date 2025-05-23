import ButtonSelection from "./ButtonSelection.js";

export default class BoostPanel {
  constructor(viewer) {
    this.viewer = viewer;
    this.boostForm = document.getElementById("side-boost-form");

    this.targetBoosts = new ButtonSelection(
      document.getElementById("side-boosts-target"),
    );
    this.targetBoosts.activeClass = "btn-dark";
    this.targetBoosts.inactiveClass = "btn-outline-dark";
    this.targetBoosts.setButtons(["Tower", "Unit"]);
    this.targetBoosts.root.addEventListener(
      "submit",
      ((e) => {
        this.loadBoosts(e.detail.toLowerCase());
      }).bind(this),
    );

    this.loadBoosts("Tower");
  }

  #createInput(labelText, defaultValue) {
    const form = document.createElement("form");
    form.classList.add("d-flex", "mb-1");

    const label = document.createElement("label");
    label.classList.add("col-sm-8", "col-form-label", "fs-6");
    label.textContent = this.#formatHeader(labelText);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("col-sm-4");

    const input = document.createElement("input");
    input.classList.add("form-control", "text-white");
    input.value = this.#formatInput(defaultValue, labelText);

    form.appendChild(label);
    form.appendChild(inputDiv);
    inputDiv.appendChild(input);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      input.blur();
    });
    form.addEventListener("mouseup", () => input.focus());
    input.addEventListener("focusin", () => (input.value = ""));
    input.addEventListener("focusout", () =>
      this.onInput(labelText, input.value),
    );

    this.boostForm.appendChild(form);
  }

  #createYesNoInput(labelText, defaultValue) {
    const form = document.createElement("form");
    form.classList.add("d-flex", "mb-1");

    const label = document.createElement("label");
    label.classList.add("col-sm-8", "col-form-label", "fs-6");
    label.textContent = this.#formatHeader(labelText);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("col-sm-4");

    const select = document.createElement("select");
    select.classList.add("form-control", "theme-select");

    const optionYes = document.createElement("option");
    optionYes.value = "Yes";
    optionYes.textContent = "Yes";
    const optionNo = document.createElement("option");
    optionNo.value = "No";
    optionNo.textContent = "No";

    select.appendChild(optionYes);
    select.appendChild(optionNo);
    select.value = defaultValue;

    form.appendChild(label);
    form.appendChild(inputDiv);
    inputDiv.appendChild(select);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      select.blur();
    });
    form.addEventListener("mouseup", () => select.focus());
    select.addEventListener("focusout", () =>
      this.onInputYesNo(labelText, select.value),
    );

    this.boostForm.appendChild(form);
  }

  onInput(name, value) {
    if (value !== "") {
      const boosts = this.#getBoosts();

      switch (name) {
        case "extraCooldown":
          boosts[name] = +value;
          break;
        default:
          boosts[name] = +value / 100;
          break;
      }
    }

    console.log(window.state.boosts);
    this.viewer.reload();
  }

  onInputYesNo(name, value) {
    const boosts = this.#getBoosts();

    if (name === "RateOfFireBug") {
      if (value === "Yes") {
        boosts[name] = +0.008;
      } else {
        boosts[name] = 0;
      }
    } else {
      if (value === "Yes") {
        boosts[name] = +0.008;
      } else {
        boosts[name] = 0;
      }
    }

    console.log(window.state.boosts);
    this.viewer.reload();
  }

  reload() {
    this.loadBoosts(this.targetBoosts.getSelectedName());
  }

  #formatHeader(value) {
    const camelRegex = /([a-z])([A-Z])/g.exec(value);

    if (camelRegex) {
      value =
        value.slice(0, camelRegex.index + 1) +
        " " +
        value.slice(camelRegex.index + 1);

      return this.#formatHeader(value);
    }

    return value[0].toUpperCase() + value.slice(1);
  }

  #formatInput(value, attribute) {
    switch (attribute) {
      case "extraCooldown":
        return `${this.#formatNumber(value)}s`;
      default:
        return this.#formatPercent(value);
    }
  }

  #formatNumber(value) {
    if (+value < 1) {
      return +(+value).toFixed(3);
    }
    if (+value < 10) {
      return +(+value).toFixed(3);
    }
    return +(+value).toFixed(1);
  }

  #formatPercent(value) {
    return `${this.#formatNumber(value * 100)}%`;
  }

  #getBoosts() {
    return window.state.boosts[
      this.targetBoosts.getSelectedName().toLowerCase()
    ];
  }

  loadBoosts() {
    this.boostForm.innerHTML = "";
    const boosts = this.#getBoosts();

    for (const [boostName, boostValue] of Object.entries(boosts)) {
      if (boostName === "extraCooldown") {
        this.#createInput(boostName, boostValue);
      } else if (boostName === "RateOfFireBug") {
        this.#createYesNoInput(boostName, boostValue === 0.008 ? "Yes" : "No");
      } else {
        this.#createInput(boostName, boostValue);
      }
    }
  }
}
