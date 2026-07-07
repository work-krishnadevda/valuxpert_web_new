import Button from "@/components/common/Button/Button";

export default function NavActions() {
  return (
    <div className="hidden lg:flex items-center gap-4">

      <Button
        className="
        rounded-xl
     text-[#3a2fda] bg-[#eeeef3]
        px-6
        shadow-sm
        "
      >
        Request a Demo
      </Button>

    </div>
  );
}
