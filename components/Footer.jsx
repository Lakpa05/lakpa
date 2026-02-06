import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:lakpasherpa9865@gmail.com">lakpasherpa9865@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 text-red-400">
                    <li><a target='_blank' href="https://github.com/lakpa05"><FaGithub /></a></li>
                    <li><a target='_blank' href="https://www.facebook.com/lakpa.sherpapinasa.9"><FaFacebook /></a></li>
                    <li><a target='_blank' href="https://www.youtube.com/@lakpasherpa05"><FaYoutube /></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/lakpa_sherpa05"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    )
}