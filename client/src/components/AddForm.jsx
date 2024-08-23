import { useMutation } from "@apollo/client";
import { useState } from "react";
import { AddGame } from "../GraphQL/mutation";

const AddForm = () => {
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState([]);
    const [platformInput, setPlatformInput] = useState("");

    const [addGame , {error}] = useMutation(AddGame)

    const handlePlatform = (e) => {
        e.preventDefault();
        if (platformInput.trim()) {
            setPlatform([...platform, platformInput.trim()]);
            setPlatformInput(""); // Clear the input field after adding
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("")
        setPlatform([])
        // Handle form submission logic here
        console.log({ title, platform });
        addGame({
            variables:{
                "game":{
                            "title":title,
                            "platform":platform
                        }
            }
        })
        if (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                />
                <div>
                    <input
                        type="text"
                        name="platform"
                        value={platformInput}
                        onChange={(e) => setPlatformInput(e.target.value)}
                        placeholder="Enter platform"
                    />
                    <button onClick={handlePlatform}>Add Platform</button>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddForm;
