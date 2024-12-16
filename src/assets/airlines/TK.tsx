import { SVGProps, Ref, forwardRef, memo } from "react";
const TK = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={648.055}
    height={102.525}
    viewBox="0 0 171.465 27.126"
    ref={ref}
    {...props}
  >
    <path
      d="M95.281 113.215c5.254-19.738-.738-40.422-15.07-51.383-19.523 12.36-30.781 35.598-26.715 59.809a58.75 58.75 0 0 0 8.328 21.804c15.266-4.25 28.688-12.297 33.457-30.23m26.352 56.96c32.222-5.41 53.949-35.917 48.535-68.128-4.504-26.813-26.363-46.352-52.14-49.05a59.357 59.357 0 0 0-16 .507 58.834 58.834 0 0 0-17.876 6.062C112.551 69.2 127.82 83.84 128.88 98.844c.52 9.261-3.785 15.96-9.441 21.422l40.156-2.805c1.136-.078 1.492 1.246.117 1.64L63.93 146.564c9.75 13.43 24.89 22.363 41.707 24.12a59.008 59.008 0 0 0 15.996-.507m-3.235-120.707c31.543 3.285 56.145 29.941 56.157 62.351.011 34.633-28.059 62.723-62.696 62.735-34.636.011-62.722-28.055-62.734-62.692-.012-34.636 28.055-62.726 62.691-62.738 2.22 0 4.418.121 6.582.344"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(.21416 0 0 .21416 -10.388 -10.388)"
    />
    <path
      d="M53.496 121.645c1.34 8 4.242 15.355 8.328 21.8 15.266-4.25 28.688-12.297 33.461-30.23 5.25-19.738-.742-40.422-15.078-51.383-19.52 12.36-30.777 35.602-26.71 59.813m116.671-19.602c5.414 32.215-16.313 62.723-48.535 68.133a59.032 59.032 0 0 1-16 .508c-16.809-1.758-31.957-10.692-41.703-24.121l95.78-27.461c1.376-.399 1.02-1.72-.116-1.641l-40.156 2.805c5.656-5.461 9.96-12.16 9.44-21.422-1.058-15.004-16.327-29.645-44.726-39.278a58.834 58.834 0 0 1 17.875-6.062 59.357 59.357 0 0 1 16-.508c25.778 2.7 47.637 22.238 52.141 49.047"
      style={{
        fill: "#c70a0c",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(.21416 0 0 .21416 -10.388 -10.388)"
    />
    <path
      d="M499.383 136.438v-20.622h-20.676v20.621h-11.348V87.32h11.348v19.567h20.676V87.32h11.433v49.118ZM254.797 87.32v30.75c0 3.399.5 6.34 1.488 8.73.98 2.372 2.402 4.345 4.227 5.86 1.84 1.531 4.062 2.66 6.597 3.356 2.579.71 5.489 1.074 8.649 1.074 3.156 0 6.039-.363 8.562-1.074 2.485-.696 4.602-1.82 6.301-3.34 1.695-1.516 3.027-3.489 3.957-5.864.938-2.382 1.406-5.324 1.406-8.742V87.32h-10.617v30.422c0 3.098-.77 5.602-2.285 7.438-1.55 1.87-4.016 2.82-7.324 2.82-3.254 0-5.7-.945-7.278-2.813-1.546-1.832-2.332-4.335-2.332-7.445V87.32ZM222.063 136.445V96.492h-13.344V87.32h38.117v4.399a4.775 4.775 0 0 1-4.77 4.773h-8.652v39.953zM404.473 87.316h11.351v49.118h-11.351zM366.672 113.531l.383.489 14.5 18.683a9.605 9.605 0 0 0 7.64 3.746h9.04l-20.774-26.422-.305-.39.305-.387 17.078-21.95h-11.812l-15.66 21.173-.395.511-.004-.886V87.3h-11.352v49.12h11.352v-22.015zM317.82 109.8h6.618c2.382 0 4.199-.655 5.394-1.94 1.184-1.274 1.785-2.93 1.785-4.919 0-2.039-.586-3.714-1.738-4.988-1.172-1.297-3-1.95-5.442-1.95h-6.617zm22.7 26.63a9.714 9.714 0 0 1-8.27-4.66l-8.832-14.583h-5.598v19.243h-11.343V87.32h20.226c5.195 0 9.266 1.356 12.094 4.032 2.82 2.668 4.25 6.324 4.25 10.863 0 2.305-.613 4.64-1.824 6.941-1.196 2.262-3.313 4.114-6.301 5.5l-.656.305 13.78 21.469zM425.14 134.352v-9.418c3.614 1.664 8.27 3.324 13.083 3.324 5.539 0 8.347-1.899 8.347-5.54 0-4.273-3.77-4.745-11.316-7.991-5.137-2.293-10.031-5.856-10.031-14.082 0-9.575 7.304-14.086 17.418-14.086 5.375 0 9.953 1.265 12.52 2.214v9.18c-2.567-1.187-7.145-2.613-11.72-2.613-4.976 0-7.304 1.82-7.304 4.984 0 3.324 2.812 4.356 7.867 6.254 6.5 3.242 14.047 4.668 14.047 15.746 0 9.574-7.625 14.797-17.82 14.797-6.262 0-11.235-1.11-15.09-2.77M775.75 136.434V87.313h30.758v4.457a4.72 4.72 0 0 1-4.715 4.714h-14.691v10.567h16.496v8.199h-16.496v12.016h19.406v9.168zM663.531 136.43V87.312h5.516a5.84 5.84 0 0 1 5.832 5.833v34.437h18.117v8.848zM593.27 136.422V87.336h11.351l-.004 49.086zM626.375 109.793h6.617c2.383 0 4.196-.652 5.395-1.938 1.183-1.277 1.785-2.93 1.785-4.921 0-2.036-.586-3.715-1.742-4.989-1.168-1.293-3-1.949-5.438-1.949h-6.617Zm22.7 26.629a9.725 9.725 0 0 1-8.274-4.656l-8.828-14.582h-5.598v19.238h-11.344V87.316h20.223c5.2 0 9.266 1.356 12.098 4.032 2.82 2.668 4.25 6.324 4.25 10.863 0 2.305-.614 4.64-1.829 6.941-1.191 2.258-3.312 4.11-6.296 5.5l-.657.305 13.782 21.465zM554.258 118.535l4.457-12.414c.988-2.793 1.98-5.742 2.64-7.914h.165c.578 2.25 1.57 5.043 2.558 7.914l4.293 12.414zM568.28 87.31h-13.035l-18.523 49.12h8.175a4.789 4.789 0 0 0 4.559-3.292l1.902-5.766h19.922l2.914 9.059h12.297zM815.625 134.352v-9.414c3.61 1.66 8.266 3.32 13.082 3.32 5.54 0 8.348-1.899 8.348-5.54 0-4.273-3.774-4.745-11.317-7.988-5.136-2.296-10.035-5.855-10.035-14.085 0-9.575 7.305-14.086 17.418-14.086 5.379 0 9.953 1.265 12.524 2.214v9.18c-2.57-1.183-7.145-2.61-11.72-2.61-4.976 0-7.304 1.821-7.304 4.985 0 3.32 2.809 4.352 7.863 6.25 6.504 3.242 14.047 4.668 14.047 15.746 0 9.574-7.625 14.797-17.816 14.797-6.262 0-11.238-1.11-15.09-2.77M722.043 87.32h7.035a9.672 9.672 0 0 1 8.211 4.559l13.7 22.008c1.546 2.445 3.34 5.675 4.402 7.96h.242c-.164-2.206-.242-5.28-.242-7.488V87.32h9.945v49.114H752.89l-16.66-26.57c-1.551-2.442-3.18-5.36-4.325-7.567h-.16c.082 2.129.242 4.652.242 7.015v27.122h-9.945zM700.3 136.422V87.336h11.348v49.086zm0 0"
      style={{
        fill: "#000",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(.21416 0 0 .21416 -10.388 -10.388)"
    />
  </svg>
);
const ForwardRef = forwardRef(TK);
const Memo = memo(ForwardRef);
export default Memo;
