import React, { useRef } from 'react';
import Heading from '../../Helper/Heading';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (
			process.env.NEXT_PUBLIC_MAIL_SERVICE_KEY &&
			process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY &&
			process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY &&
			form.current
		) {
			try {
				await emailjs.sendForm(
					process.env.NEXT_PUBLIC_MAIL_SERVICE_KEY,
					process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY,
					form.current,
					process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY
				);
				toast.success('Email sent successfully');
				clearForm();
			} catch (error) {
				toast.error('Failed to send email');
			}
		}
	};

	const clearForm = () => {
		if (form.current) {
			form.current.reset();
		}
	};

	return (
		<div className="mt-[5rem] mb-[3rem]" id="contact">
			<Heading headingPrimary="Get In Touch with us" headingSub="Contact Us" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[4rem] items-center w-[80%] m-auto">
				{/* Info content */}
				<div>
					<p className="text-[17px] text-white opacity-75">Get In Touch</p>
					<h1 className="mt-[0.6rem] text-white  p-2 sm:p-0 leading-[3.5rem] md:text-[30px] lg:text-[38px] text-[27px] xl:text-[45px]">
						Lets Make your <span className="text-yellow-400">Brand</span>{' '}
						Brillient!
					</h1>
					<p className="text-[15px] text-white mt-[1rem] opacity-75">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
						consequuntur doloribus quas distinctio beatae obcaecati consectetur,
						debitis maiores. Corrupti molestiae ullam commodi placeat, quos sint
						incidunt ea repellat quis magnam!
					</p>
					<h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
						+1 647 869 7027
					</h1>
				</div>
				{/* Form content */}
				<form ref={form} onSubmit={sendEmail}>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
						<input
							name="user_name"
							type="text"
							placeholder="Name"
							className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
							required
						/>
						<input
							name="user_email"
							type="email"
							placeholder="Email"
							className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
							required
						/>
					</div>
					<input
						name="subject"
						type="text"
						placeholder="Subject"
						className="py-[0.7rem] mt-[1.5rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4"
					/>
					<textarea
						name="message"
						rows={4}
						placeholder="Message"
						className="py-[0.7rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4"
						required
					></textarea>
					<button
						type="submit"
						className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-900 rounded-md px-4"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
