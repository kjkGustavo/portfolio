import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Astronaut from '../components/Astronaut'
import Project, { ProjectProps } from '../components/Project'
import Subtitle from '../components/Subtitle'
import '../styles/Home.module.css'

const projects: ProjectProps[] = [
  {
    name: 'Portfolio',
    description: 'Meu portfólio pessoal, com informações e projetos criados por mim.',
    url: 'https://github.com/kjkGustavo/portfolio',
  },
  {
    name: 'He4rt Conf',
    description: 'Projeto open-source para o evento He4rtConf2021, loja, autenticação e ingressos.',
    url: 'https://github.com/kjkGustavo/he4rtconf-landing',
  },
  {
    name: 'He4rt Bot',
    description: 'Bot para gestão e comunicação com a comunidade da He4rt Developers.',
    url: 'https://github.com/he4rt/he4rt-bot',
  },
]

const Home: NextPage = () => {
  return (
    <main className="container items-center h-screen flex overflow-hidden lg:overflow-visible">
      <Head>
        <title>Gustavo Lima</title>
        <meta name="title" content="Gustavo Lima" />
        <meta
          name="description"
          content="Vejo programação desde os 11 anos de idade, sou motivado por solucionar problemas através da programação..."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Gustavo Lima" />
        <meta
          property="og:description"
          content="Vejo programação desde os 11 anos de idade, sou motivado por solucionar problemas através da programação..."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Gustavo Lima" />
        <meta
          property="twitter:description"
          content="Vejo programação desde os 11 anos de idade, sou motivado por solucionar problemas através da programação..."
        />
      </Head>
      <div className="px-4 md:mx-0 relative">
        <div className="hidden lg:block bloom bloom-one"></div>
        <div className="hidden lg:block bloom bloom-two"></div>
        <header className="mb-14">
          <div className="max-w-3xl">
            <h1
              className="text-2xl md:text-5xl lg:text-6xl font-bold flex items-center gap-5 fade-in-title"
              style={{ textShadow: '0px 0px 40px rgba(255, 255, 255, 0.3)' }}
            >
              <span className="relative h-12 w-12 md:h-20 md:w-20">
                <Image
                  src="https://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_grande.png"
                  alt="Wave yellow hand"
                  layout="fill"
                  className="wave overflow-visible"
                  objectFit="cover"
                />
              </span>
              Hello, I&apos;m Gustavo!
            </h1>
            <p
              className="my-4 text-lg lg:text-xl md:text-2xl text-description fade-in-title"
              style={{ animationDelay: '.2s' }}
            >
              Vejo programação desde os 11 anos de idade, sou motivado por solucionar problemas
              através da programação...
            </p>
            <div className="flex gap-3 fade-in" font-bold style={{ animationDelay: '.5s' }}>
              <a
                className="text-white py-1.5 px-2.5  bg-socials-github inline-flex items-center rounded-md gap-1.5 font-bold leading-4 hover:scale-105"
                href="https://github.com/kjkGustavo"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1389_496)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99974 0.375C6.86316 0.376109 4.79664 1.13284 3.16969 2.50989C1.54275 3.88694 0.46147 5.79451 0.119201 7.8915C-0.223068 9.98849 0.195987 12.1382 1.30145 13.9561C2.4069 15.7741 4.12667 17.1418 6.15324 17.8147C6.60033 17.8977 6.76874 17.6206 6.76874 17.385C6.76874 17.1494 6.75979 16.4663 6.75681 15.7194C4.25309 16.2603 3.72403 14.6629 3.72403 14.6629C3.31569 13.6256 2.72552 13.3529 2.72552 13.3529C1.90883 12.7987 2.78663 12.8091 2.78663 12.8091C3.69125 12.8728 4.16666 13.7323 4.16666 13.7323C4.96845 15.1 6.27246 14.7044 6.78513 14.4732C6.86561 13.8938 7.09959 13.4996 7.35741 13.2759C5.35741 13.0506 3.25607 12.283 3.25607 8.85407C3.24367 7.96478 3.57556 7.10479 4.18305 6.45201C4.09065 6.22677 3.78215 5.31692 4.27097 4.08107C4.27097 4.08107 5.02657 3.84102 6.74639 4.99833C8.22154 4.59722 9.77794 4.59722 11.2531 4.99833C12.9714 3.84102 13.7255 4.08107 13.7255 4.08107C14.2158 5.31396 13.9073 6.22381 13.8149 6.45201C14.4244 7.10489 14.7569 7.96639 14.7434 8.85703C14.7434 12.2934 12.6376 13.0506 10.6346 13.2714C10.9565 13.55 11.2442 14.0938 11.2442 14.9296C11.2442 16.1269 11.2337 17.0901 11.2337 17.385C11.2337 17.6236 11.3962 17.9022 11.8522 17.8147C13.879 17.1417 15.5989 15.7738 16.7044 13.9555C17.8098 12.1372 18.2287 9.98722 17.886 7.89004C17.5433 5.79285 16.4615 3.88527 14.834 2.50845C13.2066 1.13164 11.1396 0.375406 9.00272 0.375H8.99974Z"
                      fill="white"
                    ></path>
                    <path
                      d="M3.40866 13.2245C3.38929 13.2689 3.31775 13.2823 3.25963 13.2511C3.20151 13.22 3.15829 13.1622 3.17916 13.1163C3.20002 13.0704 3.27007 13.0585 3.32819 13.0896C3.38631 13.1207 3.43102 13.18 3.40866 13.2245Z"
                      fill="white"
                    ></path>
                    <path
                      d="M3.77342 13.6293C3.74256 13.6448 3.70725 13.6491 3.67354 13.6415C3.63983 13.634 3.60981 13.615 3.58862 13.5878C3.5305 13.5256 3.51857 13.4397 3.56328 13.4011C3.60799 13.3626 3.68847 13.3804 3.7466 13.4426C3.80472 13.5049 3.81813 13.5908 3.77342 13.6293Z"
                      fill="white"
                    ></path>
                    <path
                      d="M4.12864 14.1428C4.0735 14.1814 3.9796 14.1428 3.92744 14.0658C3.91302 14.052 3.90155 14.0354 3.89372 14.0171C3.88588 13.9987 3.88184 13.979 3.88184 13.9591C3.88184 13.9392 3.88588 13.9195 3.89372 13.9011C3.90155 13.8828 3.91302 13.8662 3.92744 13.8524C3.98259 13.8153 4.07648 13.8524 4.12864 13.928C4.1808 14.0035 4.18229 14.1043 4.12864 14.1428Z"
                      fill="white"
                    ></path>
                    <path
                      d="M4.60971 14.64C4.56053 14.6948 4.46068 14.68 4.37871 14.6059C4.29675 14.5318 4.27737 14.431 4.32655 14.3777C4.37573 14.3243 4.47558 14.3391 4.56053 14.4117C4.64547 14.4844 4.66187 14.5866 4.60971 14.64Z"
                      fill="white"
                    ></path>
                    <path
                      d="M5.28463 14.9308C5.26228 15.0004 5.16093 15.0316 5.05959 15.0019C4.95825 14.9723 4.89119 14.8893 4.91056 14.8182C4.92993 14.7471 5.03277 14.7145 5.1356 14.7471C5.23843 14.7797 5.304 14.8582 5.28463 14.9308Z"
                      fill="white"
                    ></path>
                    <path
                      d="M6.02075 14.982C6.02075 15.0546 5.9373 15.1168 5.83 15.1183C5.72269 15.1198 5.63477 15.0605 5.63477 14.9879C5.63477 14.9153 5.71822 14.8531 5.82552 14.8516C5.93282 14.8501 6.02075 14.9079 6.02075 14.982Z"
                      fill="white"
                    ></path>
                    <path
                      d="M6.70679 14.8679C6.7202 14.9405 6.64568 15.0161 6.53838 15.0339C6.43108 15.0517 6.33719 15.0087 6.32378 14.9376C6.31036 14.8664 6.38786 14.7894 6.49218 14.7701C6.5965 14.7509 6.69338 14.7953 6.70679 14.8679Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1389_496">
                      <rect width="18" height="18" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Github
              </a>
              <a
                className="text-white py-1.5 px-2.5  bg-socials-linkedin inline-flex items-center rounded-md gap-1.5 font-bold leading-4 hover:scale-105"
                href="https://www.linkedin.com/in/kjkgustavo/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1389_493)">
                    <path
                      d="M16.6712 0H1.32875C0.976344 0 0.638371 0.139993 0.389182 0.389182C0.139993 0.638371 0 0.976344 0 1.32875V16.6712C0 17.0237 0.139993 17.3616 0.389182 17.6108C0.638371 17.86 0.976344 18 1.32875 18H16.6712C17.0237 18 17.3616 17.86 17.6108 17.6108C17.86 17.3616 18 17.0237 18 16.6712V1.32875C18 0.976344 17.86 0.638371 17.6108 0.389182C17.3616 0.139993 17.0237 0 16.6712 0ZM5.365 15.3337H2.65875V6.7375H5.365V15.3337ZM4.01 5.54625C3.70302 5.54452 3.40344 5.4519 3.14905 5.28007C2.89466 5.10823 2.69688 4.8649 2.58066 4.58077C2.46444 4.29664 2.43499 3.98444 2.49602 3.68359C2.55706 3.38274 2.70585 3.10671 2.92362 2.89034C3.14138 2.67396 3.41836 2.52695 3.7196 2.46785C4.02084 2.40874 4.33283 2.4402 4.61621 2.55824C4.89959 2.67628 5.14165 2.87563 5.31185 3.13111C5.48204 3.38659 5.57274 3.68677 5.5725 3.99375C5.5754 4.19928 5.53688 4.40328 5.45926 4.5936C5.38163 4.78393 5.26649 4.95668 5.12068 5.10155C4.97487 5.24643 4.80139 5.36046 4.61057 5.43686C4.41975 5.51326 4.2155 5.55047 4.01 5.54625ZM15.34 15.3412H12.635V10.645C12.635 9.26 12.0463 8.8325 11.2863 8.8325C10.4838 8.8325 9.69625 9.4375 9.69625 10.68V15.3412H6.99V6.74375H9.5925V7.935H9.6275C9.88875 7.40625 10.8038 6.5025 12.2 6.5025C13.71 6.5025 15.3412 7.39875 15.3412 10.0238L15.34 15.3412Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1389_493">
                      <rect width="18" height="18" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                LinkedIn
              </a>
              <a
                className="text-white py-1.5 px-2.5  bg-socials-twitter inline-flex items-center rounded-md gap-1.5 font-bold leading-4 hover:scale-105"
                href="https://twitter.com/kjkGustavo"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66064 16.3134C12.4531 16.3134 16.1683 10.6859 16.1683 5.80576C16.1683 5.64592 16.1683 5.4868 16.1575 5.3284C16.8803 4.80561 17.5042 4.15831 18 3.4168C17.326 3.7156 16.611 3.91146 15.8789 3.99784C16.6499 3.53635 17.2269 2.81042 17.5025 1.9552C16.7776 2.3854 15.9845 2.68857 15.1574 2.8516C14.6006 2.25953 13.8642 1.86748 13.0621 1.73611C12.2601 1.60474 11.4371 1.74138 10.7205 2.12489C10.0039 2.50839 9.43367 3.11738 9.09806 3.85761C8.76245 4.59784 8.68016 5.42804 8.86392 6.21976C7.39567 6.1461 5.95932 5.76453 4.64809 5.0998C3.33686 4.43507 2.18007 3.50204 1.2528 2.36128C0.780546 3.17427 0.635904 4.1367 0.848325 5.05259C1.06075 5.96849 1.61426 6.76899 2.39616 7.29112C1.80842 7.27389 1.23349 7.11534 0.72 6.82888V6.87568C0.720233 7.72831 1.01539 8.55462 1.5554 9.21445C2.09542 9.87428 2.84705 10.327 3.6828 10.4958C3.13911 10.6441 2.56866 10.6658 2.01528 10.5592C2.25136 11.2929 2.71082 11.9346 3.32943 12.3944C3.94804 12.8542 4.69487 13.1093 5.46552 13.1238C4.69983 13.7257 3.82299 14.1707 2.88516 14.4333C1.94733 14.696 0.966911 14.7712 0 14.6546C1.68887 15.7383 3.65394 16.3132 5.66064 16.3106"
                    fill="white"
                  ></path>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </header>
        <section>
          <Subtitle>Projetos</Subtitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-5 md:gap-y-3 max-w-3xl">
            {projects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
          </div>
        </section>
        <Astronaut />
      </div>
    </main>
  )
}

export default Home
