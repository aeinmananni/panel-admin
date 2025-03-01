import Button from "../../custom/button";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
const Test = () => {
  const { changeLanguage } = useChangeLanguage();
  return (
    <div className="flex gap-2 ">
      <Button
        className="Button bg-yellow-500"
        onClick={() => changeLanguage("en")}
      >
        en
      </Button>
      <Button
        className="Button bg-green-500"
        onClick={() => changeLanguage("fa")}
      >
        fa
      </Button>
      <Button
        className="Button bg-blue-500"
        onClick={() => changeLanguage("ar")}
      >
        ar
      </Button>
    </div>
  );
};

export default Test;
