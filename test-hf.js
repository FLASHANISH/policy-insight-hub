import fs from 'fs';
import { HfInference } from "@huggingface/inference";

async function run() {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (...args) => {
        console.log("FETCH URL:", args[0]);
        return {
            ok: true,
            status: 200,
            json: async () => ([{ generated_text: "Test" }]),
            text: async () => "Test"
        };
    };

    const hf = new HfInference("dummy_key");
    await hf.textGeneration({
        model: "HuggingFaceH4/zephyr-7b-beta",
        inputs: "Hi",
    });
}
run();
