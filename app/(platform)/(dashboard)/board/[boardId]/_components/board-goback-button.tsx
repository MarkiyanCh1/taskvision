"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface Props {
  orgId?: string | null | undefined;
}

export const BoardGoBackButton = ({ orgId }: Props) => {
  const router = useRouter();

  const returnToMain = () => {
    if (!orgId) {
      router.push("/select-org");
    } else {
      router.push(`/organization/${orgId}`);
    }
  };

  return (
    <Button
      onClick={returnToMain}
      variant="primary"
      className="font-bold text-lg h-auto w-auto p-1 px-2"
    >
      <p>Go back</p>
    </Button>
  );
};
