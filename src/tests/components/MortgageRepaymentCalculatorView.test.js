import MortgageRepaymentCalculatorView from "../../views/JuniorPages/MortgageRepaymentCalculator/MortgageRepaymentCalculatorView.vue";
import { mount } from "@vue/test-utils";
import { describe, it, beforeEach } from "vitest";

describe("MortgageRepaymentCalculatorView", () => {
    const wrapper = mount(MortgageRepaymentCalculatorView);

    it("Should component be mounted", () => {
        expect(
            wrapper.find("#mortgageRepaymentCalculator").exists()
        ).toBeTruthy();
    });

    it("Should renders the calculator heading and clear button", () => {
        const header = wrapper.find(".mortgage-repayment-calculator-form-head");
        expect(header.exists()).toBe(true);
        expect(
            header.find(".mortgage-repayment-calculator-form-heading").text()
        ).toBe("Mortgage Calculator");
        expect(
            header
                .find(".mortgage-repayment-calculator-form-clear-all-btn")
                .exists()
        ).toBe(true);
    });

    it("Should renders the mortgage amount input field", () => {
        const mortgageAmountField = wrapper.find("#mortgageAmountInputField");
        expect(mortgageAmountField.exists()).toBe(true);
        expect(mortgageAmountField.find("label").text()).toBe(
            "Mortgage Amount"
        );
        expect(
            mortgageAmountField.find("input#mortgageAmount").attributes("type")
        ).toBe("text");
    });

    it("Should renders the mortgage term input field", () => {
        const mortgageTermField = wrapper.find("#mortgageTermInputField");
        expect(mortgageTermField.exists()).toBe(true);
        expect(mortgageTermField.find("label").text()).toBe("Mortgage Term");
        expect(
            mortgageTermField.find("input#mortgageTerm").attributes("type")
        ).toBe("text");
    });

    it("Should renders the interest rate input field", () => {
        const interestRateField = wrapper.find("#interestRateInputField");
        expect(interestRateField.exists()).toBe(true);
        expect(interestRateField.find("label").text()).toBe("Interest Rate");
        expect(
            interestRateField.find("input#interestRate").attributes("type")
        ).toBe("text");
    });

    it("Should renders the mortgage type radio buttons", () => {
        const radioField = wrapper.find("#RadioInputField");
        expect(radioField.exists()).toBe(true);
        expect(radioField.find("label").text()).toBe("Mortgage Type");

        const repaymentRadio = radioField.find("input#repayment");
        expect(repaymentRadio.exists()).toBe(true);
        expect(repaymentRadio.attributes("type")).toBe("radio");
        expect(repaymentRadio.attributes("value")).toBe("repayment");

        const interestOnlyRadio = radioField.find("input#interest\\ only"); // Escape space in selector
        expect(interestOnlyRadio.exists()).toBe(true);
        expect(interestOnlyRadio.attributes("type")).toBe("radio");
        expect(interestOnlyRadio.attributes("value")).toBe("interest only");
    });

    it("Should renders the calculate repayments button", () => {
        const submitButton = wrapper.find(
            ".mortgage-repayment-calculator-form-main-submit"
        );
        expect(submitButton.exists()).toBe(true);
        expect(submitButton.text()).toContain("Calculate Repayments");
        expect(submitButton.find("img").attributes("alt")).toBe(
            "icon of calculator"
        );
    });

    it("Should renders the empty results section", () => {
        const resultsSection = wrapper.find(
            ".mortgage-repayment-calculator-result-no-result"
        );
        expect(resultsSection.exists()).toBe(true);
        expect(resultsSection.find("img").attributes("alt")).toBe(
            "img for empty result"
        );
        expect(
            resultsSection
                .find(".mortgage-repayment-calculator-result-no-result-heading")
                .text()
        ).toBe("Results show here");
        expect(
            resultsSection
                .find(
                    ".mortgage-repayment-calculator-result-no-result-description"
                )
                .text()
        ).toContain("Complete the form and click “calculate repayments”");
    });
});

describe("MortgageRepaymentCalculator functionality", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(MortgageRepaymentCalculatorView);
    });


    it('should correctly handle input value changes and trigger validation', async () => {
      wrapper.vm.inputMortgageAmount.value = '125000';
      expect(wrapper.vm.inputMortgageAmount.value).toBe('125000');
      expect(wrapper.vm.inputMortgageAmount.isValid).toBe(true); 
      expect(wrapper.vm.inputMortgageAmount.errorMessage).toBe('');
    });
});
