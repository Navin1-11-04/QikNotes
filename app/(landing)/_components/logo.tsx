import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo_light.svg"
        alt="QikNotes Logo"
        width={85}
        priority
        height={40}
        className="dark:hidden"/>
      <Image
        src="/logo_dark.svg"
        alt="QikNotes Logo"
        width={85}
        priority
        height={40}
        className="hidden dark:block"
      />
    </div>
  );
};
