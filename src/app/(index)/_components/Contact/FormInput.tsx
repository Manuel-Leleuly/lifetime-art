import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const FormInput = ({
  label,
  name,
  isRequired,
  isTextArea,
  placeholder,
}: {
  label: string;
  name: string;
  isRequired?: boolean;
  isTextArea?: boolean;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="flex text-black">
        <p>{label}</p>
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      {isTextArea ? (
        <Textarea placeholder={placeholder} className="min-h-40" />
      ) : (
        <Input placeholder={placeholder} name={name} type="text" />
      )}
    </div>
  );
};
