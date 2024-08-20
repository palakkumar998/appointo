import { Button } from "@/components/ui/button";
import PatientForm from "@/components/ui/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex h-screen max-h-screen">

      {/* //todo : OTP verification | passkey model */}

      <section className="container my-auto relative glow-green">
        <div className="sub-container max-w-[496px]">
          <Image src="/assets/icons/logo-full.svg"
            height={800}
            width={800}
            alt="patient name"
            className="mb-6 h-16 w-fit" />
        </div>

        <PatientForm />

        <div className="text-10-regular mt-4 justify-between flex">
          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Copyright | Appointo</p>
          <Link href="/?admin=true" className="text-green-300">Admin</Link>
        </div>
      </section>

      {/* here is the image section */}
      <Image src="/assets/images/onboarding-img.png" height={800} width={800} alt="patient" className="side-img max-w-[50%]" />

    </div>

  );
}
