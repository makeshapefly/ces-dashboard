"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import { addUser } from "@/app/actions/addUser"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup schema to validate the form
const schema = Yup.object().shape({
    email: Yup.string().required().email(),
});

const AddUserForm = () => {
    // Formik hook to handle the form state
    const formik = useFormik({
        initialValues: {
            email: "",
        },

        // Pass the Yup schema to validate the form
        validationSchema: schema,

        // Handle form submission
        onSubmit: async ({ email }) => {
            // Make a request to your backend to store the data
            try {
                const result = await addUser({
                    email: email,
                    created_at: '2024-12-06',
                    organisation: 1
                })
                console.log(result)
                formik.resetForm()
                toast("User created");
            } catch (error) {
                console.log(error)
            }
        },
    });

    // Destructure the formik object
    const { errors, touched, values, handleChange, handleSubmit } = formik;

    const createUser = async (email) => {
        try {
            const result = await addUser({
                email: email,
                created_at: '2024-12-06',
                organisation: 1
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-add-new-user form-style-2">
                <div className="wg-box">
                    <div className="left">
                        <h5 className="mb-4">User</h5>
                        <div className="body-text">Complete this form to add a new user to your organisation.</div>
                    </div>
                    <div className="right flex-grow">
                        <fieldset className="email mb-24">
                            <div className="body-title mb-10">Email</div>
                            <input className="flex-grow" type="email" placeholder="Email" name="email" id="email" tabIndex={0} onChange={handleChange} value={values.email} />
                        </fieldset>
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                </div>
                <div className="bot">
                    <button className="tf-button w180" type="submit">Save</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddUserForm;