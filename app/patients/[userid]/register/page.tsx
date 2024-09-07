
import RegisterForm from '@/components/ui/forms/RegisterForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="container my-auto relative glow-green">
                <div className="sub-container max-w-[396px]">
                    <Image src="/assets/icons/logo-full.svg"
                        height={800}
                        width={800}
                        alt="patient name"
                        className="mb-6 h-16 w-fit" />
                </div>

                {/* //todo Register form here */}
                <RegisterForm />

                <div className="text-10-regular mt-4 justify-between flex">
                    <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Copyright | Appointo</p>
                    <Link href="/?admin=true" className="text-green-300">Admin</Link>
                </div>
            </section>

            {/* here is the image section */}
            <Image src="/assets/images/register-img.png" height={800} width={800} alt="patient" className="side-img max-w-[60%]" />

        </div>
    )
}

export default Register 