import React from "react";
import "./RegExText.css";
interface RegExTextProps {
  regExInput: string; //React.MutableRefObject<string>;
}
function RegExText(props: RegExTextProps) {
  const loremText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Animi Lo adipisci molestiae cupiditate ut ex aut magnam omnis et cum veritatis aliquid reprehenderit repellat dolorem nihil assumenda, doloremque placeat neque natus provident. Eum the fish quos quia earum quam, corrupti numquam modi velit et alias quaerat harum? Dolorum quod expedita earum laudantium fugiat repudiandae debitis veniam, sint voluptate. Nesciunt repudiandae sed quibusdam laboriosam the trout hic doloribus commodi nisi sint sunt, dignissimos, pariatur ea libero corporis corrupti nemo officia temporibus consectetur eius dolor dolores molestiae reiciendis distinctio porro fuga? Reiciendis ex eveniet veniam sapiente.The shame! Quibusdam tempora quo commodi ipsam repellendus odio quod excepturi incidunt libero?";
  const [loremElement, setLoremElement] = React.useState<string>(loremText);
  function regexIt() {
    function replacer(value: string) {
      return `<span style="color:orange;background:var(--whiteTr20)">${value}</span>`;
    }
    const regExpression = new RegExp(props.regExInput, "g");
    const text = loremText.replace(regExpression, replacer);
    setLoremElement(text);
  }
  React.useEffect(() => regexIt());
  return (
    <div id="regExText">
      <div id="regextextcontainer">
        {" "}
        <div dangerouslySetInnerHTML={{ __html: loremElement }} />
      </div>
    </div>
  );
}
export default RegExText;

//<span className="yl">s</span>
