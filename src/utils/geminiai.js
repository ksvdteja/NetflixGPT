import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from "./constants";


export const geminiAI = new GoogleGenerativeAI(GEMINIAI_KEY);