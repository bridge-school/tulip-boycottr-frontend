import React from 'react';
import { Field, reduxForm } from 'redux-form';

const BoycottReasonForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label class="title is-3" >Reasons</label>
                <div class="field">
                    <div class="control">
                        <label>
                            <Field
                                name="Animal Testing"
                                //id="employee"
                                component="input"
                                type="checkbox"
                                value="Animal Testing"
                            />
                            Animal Testing
                    </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label >
                            <Field
                                name="Worker Mistreatment"
                                component="input"
                                type="checkbox"
                                value="Worker Mistreatment"
                            />
                            Worker Mistreatment
                    </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label >
                            <Field
                                name="Environmental Policies"
                                component="input"
                                type="checkbox"
                                value="Environmental Policies"
                            />
                            Environmental Policies
                    </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label >
                            <Field
                                name="Anti-LGBTQ+"
                                component="input"
                                type="checkbox"
                                value="Anti-LGBTQ+"
                            />
                            Anti-LGBTQ+
                    </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label >
                            <Field
                                name="Sexist Behaviour"
                                component="input"
                                type="checkbox"
                                value="Sexist Behaviour"
                            />
                            Sexist Behaviour
                    </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label >
                            <Field
                                name="Racist Behaviour"
                                component="input"
                                type="checkbox"
                                value="Racist Behaviour"
                            />
                            Racist Behaviour
                    </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label htmlFor="otherReason">Other</label>
                        <Field
                            class="input"
                            name="other"
                            component="input"
                            type="text"
                            //value="other"
                            id="other"
                            placeholder="Other Boycott Reason"
                        />
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'boycottReasonForm'
})(BoycottReasonForm)
