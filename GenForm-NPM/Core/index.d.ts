/**
 * @typedef {Object} InputElem
 * @property {string} type - The type of the input element
 * @property {string} name - The name of the input element
 * @property {string} label - The label of the input element
 * @property {string} placeholder - The placeholder of the input element
 * @property {boolean} required - The required attribute of the input element
 */

/**
 * @typedef {Object} FormParams
 * @property {string} action - The action of the form
 * @property {string} method - The method of the form
 */

/**
 * @typedef {Object} FormObj
 * @property {InputElem[]} elems - The list of the inputs and their params
 * @property {FormParams} params - The params of the form
 */

/**
 * This function creates a form in the DOM from an object listing the required inputs and their parameters
 * @param {Document} document - The required document object to create form's elements
 * @param {formObj} obj - The object containing the required inputs, their parameters, and the form parameters
 * @returns {HTMLFormElement} - The form element containing the specified elements
 */
declare class GenForm {
  static validTypes: string[];
  static validAttributes: string[];

  static toForm(document: Document, obj: FormObj): HTMLFormElement;
}

/**
 * @param {formObj} jsonObj - The JSON object to check for duplicate names
 * @throws {Error} - Throws an error if duplicate names are found
 */
declare function nameIsDuplicate(jsonObj: FormObj): void;

/**
 * @param {formObj} jsonObj - The input JSON to check for correctness
 * @throws {Error} - Throws an error if the JSON is incorrect
 */
declare function jsonIsCorrect(inputJSON: FormObj): void;