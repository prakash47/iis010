"use client";

import { useActionState } from "react"; // React 19 hook
import { submitContactForm } from "@/actions/contact";
import { ContactFormState } from "@/lib/schemas";

const initialState: ContactFormState = {
    success: false,
    message: "",
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form action={formAction} className="card-body">
                <h2 className="text-2xl font-bold mb-4 font-display text-brand-primary">Get in Touch</h2>

                {state.message && (
                    <div role="alert" className={`alert ${state.success ? "alert-success" : "alert-error"} mb-4`}>
                        <span>{state.message}</span>
                    </div>
                )}

                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text font-semibold text-base-content">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={`input input-bordered w-full ${state.errors?.name ? "input-error" : ""}`}
                        required
                    />
                    {state.errors?.name && <span className="text-error text-sm mt-1">{state.errors.name[0]}</span>}
                </div>

                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text font-semibold text-base-content">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        className={`input input-bordered w-full ${state.errors?.email ? "input-error" : ""}`}
                        required
                    />
                    {state.errors?.email && <span className="text-error text-sm mt-1">{state.errors.email[0]}</span>}
                </div>

                <div className="form-control mb-6">
                    <label className="label mb-2">
                        <span className="label-text font-semibold text-base-content">Message</span>
                    </label>
                    <textarea
                        name="message"
                        className={`textarea textarea-bordered h-32 w-full ${state.errors?.message ? "textarea-error" : ""}`}
                        placeholder="How can we help you?"
                        required
                    ></textarea>
                    {state.errors?.message && <span className="text-error text-sm mt-1">{state.errors.message[0]}</span>}
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white" disabled={isPending}>
                        {isPending ? <span className="loading loading-spinner"></span> : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
}
