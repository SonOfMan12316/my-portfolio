import Button from "@/app/components/atoms/Button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Title from "@/app/components/atoms/Title";
import Subtitle from "@/app/components/atoms/Subtitle";
import BackgroundBlur from "@/app/components/molecules/BackgroundBlur";

interface ErrorPageTemplateProps {
  code: number;
  description: React.ReactNode;
}

export default function ErrorPageTemplate({
  code,
  description,
}: ErrorPageTemplateProps) {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Title className="text-8xl">{code}</Title>
        <Subtitle className="mt-4">{description}</Subtitle>

        <div className="w-full h-full flex justify-center items-center pt-16">
          <Button variant="primary" className="w-44">
            <FaArrowLeft className="animate-arrow-bounce" size={18} />
            <Link href="/" className="text-nowrap">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <BackgroundBlur />
    </div>
  );
}
