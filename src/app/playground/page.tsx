import Section from "@/components/ui/section";
import Playground from "@/components/Playground";

export const metadata = {
    title: "JavaScript Playground | Sohan Paliyal",
    description: "Interactive JavaScript playground to test algorithms, system design patterns, and React concepts live in the browser.",
};

export default function PlaygroundPage() {
    return (
        <div className="pt-28 pb-10 min-h-screen">
            <Section idName="playground" className="flex flex-col gap-6">
                <div>
                    <h1 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        JS <span className="text-gradient-purple">Playground</span>
                    </h1>
                    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        A live environment to test JavaScript logic, algorithms, and system design patterns directly in your browser.
                        Write code on the left, see results on the right.
                    </p>
                </div>

                <Playground />
            </Section>
        </div>
    );
}
