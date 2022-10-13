export type ProjectProps = {
  name: string
  description: string
}

const Project = ({ name, description }: ProjectProps) => (
  <a href="/asdad" className="group relative">
    <div
      className="border-border-primary border-solid border-[1px] rounded-md bg-card-primary/40 hover:bg-card-hover/40 backdrop-blur-xl py-3 px-2.5 hover:border-border-hover fade-in"
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', animationDelay: '1.2s' }}
    >
      <h3 className="font-bold mb-1 text-lg">{name}</h3>
      <p className="text-subdescription">{description}</p>
    </div>
    <div className="opacity-0  group-hover:opacity-100 group-hover:transition-all transition-all duration-300 absolute bottom-0 -z-10 left-1/2 h-8 w-36 bg-bluehover -translate-x-1/2"></div>
    <svg
      className="absolute top-3 right-2.5 fade-in"
      width="22"
      height="22"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animationDelay: '1.2s' }}
    >
      <g clip-path="url(#clip0_1_96)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.0002 0.375C6.86362 0.376109 4.7971 1.13284 3.17015 2.50989C1.54321 3.88694 0.461927 5.79451 0.119658 7.8915C-0.222611 9.98849 0.196445 12.1382 1.3019 13.9561C2.40736 15.7741 4.12713 17.1418 6.1537 17.8147C6.60079 17.8977 6.7692 17.6206 6.7692 17.385C6.7692 17.1494 6.76025 16.4663 6.75727 15.7194C4.25355 16.2603 3.72449 14.6629 3.72449 14.6629C3.31614 13.6256 2.72598 13.3529 2.72598 13.3529C1.90929 12.7987 2.78709 12.8091 2.78709 12.8091C3.69171 12.8728 4.16712 13.7323 4.16712 13.7323C4.9689 15.1 6.27292 14.7044 6.78559 14.4732C6.86607 13.8938 7.10005 13.4996 7.35787 13.2759C5.35787 13.0506 3.25653 12.283 3.25653 8.85407C3.24413 7.96478 3.57602 7.10479 4.18351 6.45201C4.09111 6.22677 3.78261 5.31692 4.27143 4.08107C4.27143 4.08107 5.02703 3.84102 6.74685 4.99833C8.222 4.59722 9.7784 4.59722 11.2536 4.99833C12.9719 3.84102 13.726 4.08107 13.726 4.08107C14.2163 5.31396 13.9078 6.22381 13.8154 6.45201C14.4248 7.10489 14.7574 7.96639 14.7439 8.85703C14.7439 12.2934 12.638 13.0506 10.6351 13.2714C10.957 13.55 11.2446 14.0938 11.2446 14.9296C11.2446 16.1269 11.2342 17.0901 11.2342 17.385C11.2342 17.6236 11.3966 17.9022 11.8527 17.8147C13.8795 17.1417 15.5994 15.7738 16.7048 13.9555C17.8103 12.1372 18.2291 9.98722 17.8865 7.89004C17.5438 5.79285 16.462 3.88527 14.8345 2.50845C13.207 1.13164 11.14 0.375406 9.00317 0.375H9.0002Z"
          fill="white"
        />
        <path
          d="M3.40833 13.224C3.38895 13.2685 3.31742 13.2818 3.2593 13.2507C3.20117 13.2196 3.15796 13.1618 3.17882 13.1158C3.19969 13.0699 3.26973 13.058 3.32785 13.0892C3.38598 13.1203 3.43068 13.1795 3.40833 13.224Z"
          fill="white"
        />
        <path
          d="M3.77348 13.6285C3.74262 13.644 3.70731 13.6483 3.6736 13.6407C3.63989 13.6332 3.60987 13.6142 3.58869 13.587C3.53056 13.5248 3.51863 13.4389 3.56334 13.4003C3.60805 13.3618 3.68854 13.3796 3.74666 13.4418C3.80478 13.5041 3.81819 13.59 3.77348 13.6285Z"
          fill="white"
        />
        <path
          d="M4.12818 14.1427C4.07304 14.1813 3.97915 14.1427 3.92699 14.0657C3.91256 14.0519 3.90109 14.0353 3.89326 14.017C3.88542 13.9986 3.88138 13.9789 3.88138 13.959C3.88138 13.9391 3.88542 13.9194 3.89326 13.901C3.90109 13.8827 3.91256 13.8661 3.92699 13.8523C3.98213 13.8153 4.07602 13.8523 4.12818 13.9279C4.18034 14.0034 4.18183 14.1042 4.12818 14.1427V14.1427Z"
          fill="white"
        />
        <path
          d="M4.60953 14.6406C4.56035 14.6955 4.4605 14.6806 4.37853 14.6065C4.29656 14.5325 4.27718 14.4317 4.32636 14.3783C4.37554 14.325 4.4754 14.3398 4.56034 14.4124C4.64529 14.485 4.66169 14.5873 4.60953 14.6406V14.6406Z"
          fill="white"
        />
        <path
          d="M5.28463 14.9311C5.26228 15.0007 5.16093 15.0318 5.05959 15.0022C4.95825 14.9726 4.89119 14.8896 4.91056 14.8185C4.92993 14.7473 5.03277 14.7147 5.1356 14.7473C5.23843 14.7799 5.304 14.8585 5.28463 14.9311Z"
          fill="white"
        />
        <path
          d="M6.02087 14.9815C6.02087 15.0541 5.93742 15.1163 5.83012 15.1178C5.72282 15.1193 5.63489 15.06 5.63489 14.9874C5.63489 14.9148 5.71834 14.8525 5.82564 14.851C5.93295 14.8496 6.02087 14.9074 6.02087 14.9815Z"
          fill="white"
        />
        <path
          d="M6.70642 14.8674C6.71983 14.94 6.64532 15.0155 6.53802 15.0333C6.43071 15.0511 6.33682 15.0081 6.32341 14.937C6.31 14.8659 6.38749 14.7888 6.49182 14.7696C6.59614 14.7503 6.69301 14.7947 6.70642 14.8674Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_96">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </a>
)

export default Project
