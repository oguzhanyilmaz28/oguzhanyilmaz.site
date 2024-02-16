import AboutMotion from '@/components/about-motion';
import ViewResumeBtn from '@/components/buttons/ViewResumeBtn';

export default function About() {
    return (
        <AboutMotion>
            <div className="text-4xl font-bold text-center">
                About <span className="text-primary">ME</span>
            </div>
            <p className="text-gray-700 antialiased text-xl font-light max-w-xl tracking-wider leading-8 dark:text-slate-50 px-2">
            I am a 3rd year computer engineering student at Balikesir University.
            I have an investigative and determined personality.
            I always try to improve myself and learn new things in the field of software.
            I have an intermediate level English.I am interested in back-end and front-end development.
            I have good knowledge of intermediate C#,Python and SQL.
            In additipn,I develop projects using C# ,.NET Core,Html,Css,JavaScript,Php and Python.
            </p>
            <div className="gap-3 flex flex-col sm:flex-row">
                <ViewResumeBtn />
                <a
                    href="/oguzhan-yilmaz-cv.pdf"
                    download="oguzhan-yilmaz-cv.pdf"
                    className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary font-medium text-lg"
                >
                    Download CV
                </a>
            </div>
        </AboutMotion>
    );
}
