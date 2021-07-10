const exampleState = {
    forms: {
        'some-uuidv4-id': {
            id: "some-uuidv4-id",
            name: "form-name",
            sections: ["array-of-section-ids"],
            externalTarget: "external-target-default-undefined"
        }
    },
    sections: {
        'some-uuidv4-id': {
            id: "some-uuidv4-id",
            name: "section-name",
            description: "section-description",
            format: "single-column-or-double",
            inputs: ["array-of-input-ids"]
        }
    },
    inputs: {
        'some-uuidv4-id': {
            id: "some-uuidv4-id",
            title: "text-displayed-for-input",
            name: "input-name-no-spaces",
            type: "some-html-input-type",
            attributes: {
                required: "default-undefined",
                max: "default-undefined",
                min: "default-undefined",
                pattern: "default-undefined",
                maxlength: "default-undefined",
                step: "default-undefined",
                placeholder: "default-undefined",

            },
            selectOptions: ["list-of-select-options-default-undefined"]
        }
    },
    responses: {
        'some-uuidv4-id': {
            formId: 'some-uuidv4-id',
            responseId: 'some-uuidv4-id',
            body: {
                //different for every form type but this should be the response body
            }
        }
    }
}