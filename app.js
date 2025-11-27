        import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

        const ai = new GoogleGenerativeAI("AIzaSyBSGW1-2PccslFCE-TQ4eZzaZl_Hd-Nq_M"); // <-- ADD YOUR KEY

        async function generate() {
            const text = document.getElementById("prompt").value;
            const resultBox = document.getElementById("result");
            resultBox.textContent = "Loading...";

            try {
                // const model = ai.getGenerativeModel({
                //     // model: "gemini-1.5-pro", // or "gemini-1.5-flash"
                //     model: "models/gemini-1.5-flash"  // ✔ WORKING MODEL
                // });
                console.log(ai);
                const model = ai.getGenerativeModel({
                    model: "models/gemini-2.0-flash"   // or another supported model name
                });

                const result = await model.generateContent(text);
                resultBox.textContent = result.response.text();

            } catch (error) {
                resultBox.textContent = "Error: " + error.message;
            }
        }

        // expose function
        window.generate = generate;