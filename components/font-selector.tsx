import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FontSelectorProps {
  onFontChange: (fontVar: string) => void;
}

const FontSelector = ({
    onFontChange
} : FontSelectorProps) => {
    return (
        <Select onValueChange={(value) => onFontChange(value)}>
            <SelectTrigger className="bg-background font-[550] text-muted-foreground border-none shadow-none select-none hover:text-primary active:text-primary font-manrope text-sm">
               <SelectValue placeholder="Font Style" />
            </SelectTrigger>
            <SelectContent side="left" align="center">
                <SelectItem value="font-inter" className="font-inter">Inter</SelectItem>
                <SelectItem value="font-nunito" className="font-nunito">Nunito</SelectItem>
                <SelectItem value="font-urbanist" className="font-urbanist">Urbanist</SelectItem>
                <SelectItem value="font-patrick-hand" className="font-patrick-hand">Patrick</SelectItem>
                <SelectItem value="font-playfair" className="font-playfair">PlayFair</SelectItem>
                <SelectItem value="font-work-sans" className="font-work-sans">WorkSans</SelectItem>
            </SelectContent>
        </Select>
    );
}
 
export default FontSelector;