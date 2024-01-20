// Declarative file, read by the TypeScript compiler to determine the JS code type

interface InputElem {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
}

interface FormParams {
  action: string;
  method: string;
}

interface FormObj {
  elems: InputElem[];
  params: FormParams;
}

declare class GenForm {
  static validTypes: string[];
  static validAttributes: string[];
}

declare namespace GenForm {
  /**
   * This function creates a form in the DOM from an object listing the required inputs and their parameters
   * @param {Document} document - The required document object to create form's elements
   * @param {formObj} obj - The object containing the required inputs, their parameters, and the form parameters
   * @returns {HTMLFormElement} - The form element containing the specified elements
   */
  function toForm(document: Document, obj: FormObj): HTMLFormElement;
} 

export default GenForm;
