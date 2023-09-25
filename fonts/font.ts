import { Inter, Roboto } from "next/font/google";

const fontInter = Inter({ subsets: ["latin"] },);
const fontRoboto = Roboto({ subsets: ["latin"], weight: ['100', "300", "400", "500", "700", "900"] });

export const fontSelector = {
    "inter": fontInter,
    "roboto": fontRoboto
}
