import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <div className="flex items-center w-fullp-6 bg-background z-50">
            <Button
            variant="ghost"
            size="sm">
                Privacy Policy
            </Button>
            <Button
            variant="ghost"
            size="sm">
                Terms & Conditions
            </Button>
        </div>
    );
}
 
export default Footer;