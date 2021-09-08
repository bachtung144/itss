import {useState} from "react";

function CustomHook() {
    const [name, setName] = useState('')
    const [arr, setArr] = useState(['Huyen', 'Hoa', 'Hung', 'Long'])
    const handleChange= (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        setArr([...arr,name]); e.preventDefault();
    }

    return (
        <div>
            <p>学生一覧: ['Huyen', 'Hoa', 'Hung', 'Long']</p>
            <p>追加する名前を入力してください</p>
            <form onSubmit={handleSubmit}>
                <label><input type="text" value={name} onChange={handleChange} /></label>
                <input type="submit" value="確定" />
            </form>
            <p>追加する名前: {name}</p>
            <p>新しい一覧: [{arr.map((item) => item + ',')}]</p>
        </div>
    );
}
export default CustomHook;
