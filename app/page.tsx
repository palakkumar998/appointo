import { Button } from "@/components/ui/button";
import PatientForm from "@/components/ui/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex h-screen max-h-screen">

      {/* //todo : OTP varifiction | passkey model */}

      <section className=" remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]" >
          <Image src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient name"
            className="mb-12 h-10 w-fit" />
        </div>

        <PatientForm />

        <div className="text-10-regular mt-5 justify-between flex " >
          <p className="justify-items-end text-dark-600 xl:text-left" >© 2024 Copyright | Appointo</p>
          <Link href="/?admin = true" className="text-green-300">Admin</Link>
        </div>
      </section>
      {/* here is the image section */}
      <Image src="/assets/images/onboarding-img.png" height={1000} width={1000} alt="patient" className="side-img max-w-[50%]" />

    </div>
  );
}
