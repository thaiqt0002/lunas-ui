import { FC } from 'react'

import { IIconProps } from '@/types'

const SmallLogoIcon: FC<IIconProps> = ({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? '52'}
      height={size ?? '32'}
      viewBox="0 0 52 32"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1128_4961)">
        <path
          d="M5.98316 18.7938C5.12901 19.0115 4.25182 19.1256 3.37045 19.1337C2.49226 19.1403 1.61603 19.0497 0.75774 18.8635C0.619557 18.8295 0.490382 18.7659 0.379121 18.6771C0.26786 18.5884 0.177159 18.4765 0.113272 18.3492C-0.0228783 18.1115 -0.0604037 17.8298 0.00876346 17.5647C0.252616 16.5535 0.496469 15.5598 0.731613 14.566C0.966757 13.5723 1.21061 12.5786 1.43704 11.5674C1.33762 11.6084 1.23104 11.6291 1.12352 11.6284C1.05537 11.6255 0.989222 11.6045 0.931921 11.5674C0.879158 11.5331 0.836948 11.4848 0.809994 11.4279L0.00876346 10.0768L0.879667 9.47533L1.55897 8.96975L2.23828 8.45545C2.23828 8.45545 2.23828 8.38571 2.23828 8.34213C2.23219 8.30168 2.23219 8.26054 2.23828 8.22009C2.38633 7.6622 2.52567 7.08688 2.6476 6.4767C2.76953 5.86651 2.935 5.28247 3.10047 4.7333C3.27203 4.14156 3.47554 3.55957 3.7101 2.98991C3.93418 2.44088 4.22681 1.92245 4.58101 1.447C4.72906 1.26395 4.91195 1.05474 5.12967 0.828099C5.34234 0.612787 5.57904 0.42267 5.8351 0.261495C6.0719 0.10773 6.34561 0.0204265 6.62763 0.00870302C6.77832 0.00609128 6.92783 0.0358657 7.06605 0.096016C7.20427 0.156166 7.32799 0.245293 7.42886 0.357382C7.62749 0.551754 7.77679 0.790858 7.86431 1.05474C7.96148 1.338 8.03147 1.62989 8.07333 1.92644C8.10994 2.21563 8.13029 2.50666 8.13429 2.79813V3.61753C8.10191 4.21925 7.96025 4.81003 7.71626 5.36092C7.4676 5.91931 7.158 6.44845 6.7931 6.9387C6.41222 7.45183 5.98672 7.93023 5.52158 8.36828C5.04258 8.81284 4.55488 9.23997 4.04975 9.64967L2.30795 16.9632C2.86992 17.0154 3.43552 17.0154 3.9975 16.9632C4.57052 16.9267 5.13743 16.8244 5.68705 16.6581L6.13121 18.4712V18.5933C6.13121 18.6892 6.07896 18.7502 5.98316 18.7938ZM5.41707 4.219C5.24289 4.7333 5.07742 5.26504 4.93808 5.80549L5.07742 5.59628C5.34417 5.23263 5.58568 4.85109 5.80027 4.45436C6.00479 4.05004 6.10082 3.59947 6.07896 3.14681C6.08959 3.06872 6.08959 2.98955 6.07896 2.91145C5.80915 3.32056 5.58707 3.75927 5.41707 4.219Z"
          fill="#6C70F0"
        />
        <path
          d="M14.7792 12.0033L15.1799 12.2561C15.3518 12.3553 15.515 12.469 15.6676 12.596C15.3739 13.233 15.0394 13.8503 14.666 14.444C14.308 15.0223 13.8778 15.5525 13.3858 16.0218C12.997 16.4097 12.4983 16.6684 11.9575 16.7627C11.674 16.787 11.389 16.738 11.1298 16.6204C10.8706 16.5029 10.6458 16.3208 10.477 16.0915C10.3666 15.9599 10.2757 15.8131 10.207 15.6557C9.89966 16.0578 9.47175 16.351 8.98594 16.4921C8.50014 16.6333 7.98193 16.6151 7.5072 16.4402C6.88477 16.2821 6.33486 15.9161 5.94829 15.4029C5.57672 14.9026 5.3236 14.3243 5.20802 13.7118C5.07753 13.0638 5.0307 12.4017 5.06867 11.7418C5.10617 11.1168 5.17593 10.4941 5.27769 9.87633V9.82403C5.26637 9.79307 5.26637 9.7591 5.27769 9.72814L5.46929 8.85645L6.14859 8.95233C6.46073 8.98388 6.76959 9.04221 7.07175 9.12667C7.24593 9.12667 7.35044 9.28358 7.37657 9.51022C7.39281 9.77329 7.37229 10.0373 7.3156 10.2947V10.3383C7.24916 10.6262 7.19685 10.9171 7.15884 11.21C7.12941 11.6017 7.12941 11.9951 7.15884 12.3868C7.15576 12.7771 7.19962 13.1664 7.28948 13.5462C7.31319 13.6962 7.37007 13.8389 7.45595 13.9641C7.54183 14.0893 7.65456 14.1937 7.78589 14.2697C7.88031 14.3191 7.98362 14.3492 8.0898 14.3582C8.19597 14.3672 8.30287 14.3549 8.40423 14.322C8.62916 14.2592 8.83542 14.1425 9.00516 13.982C9.18949 13.809 9.35051 13.6127 9.48415 13.398C9.62236 13.1907 9.72263 12.9605 9.78026 12.7181C9.78026 12.1515 9.78026 11.6197 9.78026 11.1141C9.78026 10.6086 9.78026 10.2424 9.82381 9.91992L11.5134 9.45792H11.8008C11.874 9.47334 11.9445 9.49979 12.0098 9.53637C12.0385 9.55283 12.062 9.57716 12.0774 9.60649C12.0928 9.63583 12.0996 9.66896 12.0969 9.70199C12.0969 9.88505 12.0446 10.1727 12.0098 10.5737C11.9749 10.9747 11.9227 11.4454 11.8791 11.8725C11.8356 12.2997 11.792 12.7442 11.7746 13.1975C11.7448 13.5106 11.7448 13.8258 11.7746 14.1389C11.8095 14.3191 11.8791 14.4063 11.9836 14.4004C12.1249 14.3718 12.2531 14.2985 12.3494 14.1912C12.5076 14.038 12.6559 13.875 12.7936 13.7031C12.9548 13.5136 13.106 13.3157 13.2465 13.1103C13.3858 12.9098 13.499 12.7268 13.5948 12.5612L13.7951 12.2473C13.8239 12.1932 13.8558 12.1408 13.8909 12.0904C13.9156 12.034 13.9478 11.9813 13.9867 11.9335C14.0172 11.8689 14.0584 11.8099 14.1086 11.7592C14.1448 11.7242 14.1901 11.7001 14.2393 11.6895C14.2771 11.6839 14.3158 11.6872 14.3521 11.6994C14.3884 11.7115 14.4214 11.732 14.4483 11.7592C14.5354 11.8376 14.6486 11.9074 14.7792 12.0033Z"
          fill="#6C70F0"
        />
        <path
          d="M21.5112 12.439L21.9206 12.6831C22.0938 12.7782 22.2597 12.886 22.417 13.0056C22.1621 13.6236 21.8713 14.2261 21.5461 14.8101C21.2613 15.3495 20.8972 15.8431 20.4661 16.2745C20.1297 16.6226 19.6838 16.8442 19.2033 16.9021C18.9261 16.8958 18.6536 16.8285 18.4053 16.705C18.1569 16.5814 17.9388 16.4047 17.7663 16.1873C17.5099 15.929 17.3266 15.6071 17.2351 15.2546C17.1549 14.894 17.114 14.5257 17.1132 14.1563C17.1132 13.7727 17.1132 13.3892 17.1741 12.9969C17.1948 12.6398 17.1948 12.2818 17.1741 11.9247C17.1741 11.6458 17.0783 11.4889 16.9216 11.4453C16.7648 11.4017 16.5906 11.5673 16.3903 11.9247C16.1432 12.5087 15.9678 13.1204 15.8678 13.7466C15.6578 14.8983 15.5298 16.0635 15.4846 17.2334L13.5338 17.1113V16.1176C13.5338 14.9931 13.4902 13.8076 13.5338 12.5436C13.5773 11.2797 13.6208 10.0506 13.7079 8.86509C13.7172 8.80835 13.7382 8.75419 13.7697 8.70614C13.8012 8.65808 13.8425 8.61719 13.8908 8.58614C13.91 8.57748 13.9308 8.573 13.9518 8.573C13.9728 8.573 13.9936 8.57748 14.0128 8.58614L15.7546 8.63844C15.7546 8.83893 15.711 9.03071 15.7023 9.2312C15.6936 9.43169 15.7023 9.62346 15.7023 9.83267C15.8854 9.61839 16.1114 9.44498 16.3657 9.32367C16.62 9.20237 16.8969 9.13586 17.1785 9.12847C17.4601 9.12107 17.7401 9.17295 18.0004 9.28074C18.2607 9.38854 18.4954 9.54984 18.6895 9.75422C18.9648 10.0175 19.1609 10.3527 19.2556 10.7218C19.3544 11.0914 19.4042 11.4724 19.4036 11.855C19.4121 12.2596 19.3947 12.6643 19.3514 13.0667C19.3119 13.4372 19.2974 13.81 19.3078 14.1824C19.3078 14.4614 19.3862 14.5486 19.5082 14.4527C19.6754 14.3185 19.8145 14.1526 19.9175 13.9645C20.0655 13.7379 20.2049 13.4851 20.3442 13.2236L20.6142 12.7006C20.6488 12.653 20.6753 12.5999 20.6926 12.5436L20.771 12.378C20.8035 12.3146 20.8445 12.256 20.8929 12.2037C20.9314 12.1699 20.9756 12.1433 21.0235 12.1252C21.0758 12.1252 21.1455 12.1252 21.2325 12.195C21.3196 12.2647 21.3719 12.3519 21.5112 12.439Z"
          fill="#6C70F0"
        />
        <path
          d="M30.4467 12.0033L30.8473 12.256C31.0179 12.3575 31.1809 12.4711 31.335 12.596C31.0383 13.2331 30.7008 13.8503 30.3248 14.444C29.9725 15.0239 29.5449 15.5544 29.0533 16.0218C28.6625 16.4117 28.1604 16.6706 27.6163 16.7627C27.3329 16.7853 27.0485 16.7355 26.7896 16.6181C26.5307 16.5008 26.3057 16.3196 26.1358 16.0915C25.8788 15.7455 25.7112 15.3412 25.6481 14.9147C25.5075 15.0815 25.3531 15.2361 25.1865 15.3767C25.0261 15.5255 24.8574 15.6652 24.6813 15.7951C24.3283 16.0523 23.9137 16.2116 23.4795 16.2571C23.0881 16.2946 22.6939 16.2254 22.3386 16.0566C21.9885 15.8903 21.6882 15.6348 21.4677 15.3157C21.2044 14.9597 21.0257 14.5483 20.9452 14.1128C20.8602 13.6851 20.8194 13.2499 20.8232 12.8139C20.8238 12.3677 20.8764 11.923 20.98 11.489C21.0842 11.0595 21.2391 10.6439 21.4416 10.2511C21.6491 9.85822 21.9232 9.5043 22.2515 9.20511C22.5636 8.89708 22.9382 8.65981 23.3499 8.50941C23.7616 8.35901 24.2009 8.29899 24.6378 8.33341C25.5241 8.42746 26.3407 8.85797 26.9196 9.53635L27.1808 9.4579H27.4769C27.5479 9.47178 27.6157 9.49835 27.6773 9.53635C27.7068 9.55195 27.7309 9.57611 27.7464 9.60567C27.762 9.63523 27.7682 9.6688 27.7643 9.70197C27.7643 9.88503 27.7208 10.1727 27.6773 10.5737C27.6337 10.9747 27.5989 11.4454 27.5466 11.8725C27.4944 12.2996 27.4682 12.7442 27.4508 13.1975C27.421 13.5106 27.421 13.8258 27.4508 14.1389C27.4508 14.322 27.5466 14.4091 27.6511 14.4004C27.793 14.3737 27.9218 14.3 28.0169 14.1912C28.1781 14.0383 28.3293 13.8752 28.4698 13.7031C28.6282 13.5135 28.7765 13.3156 28.9139 13.1103C29.0533 12.9098 29.1752 12.7268 29.271 12.5611L29.4626 12.2473C29.4977 12.197 29.5297 12.1446 29.5584 12.0904L29.6542 11.9335C29.6876 11.8706 29.7285 11.8121 29.7761 11.7592C29.8155 11.7239 29.8636 11.6998 29.9155 11.6894C29.952 11.6845 29.9891 11.6883 30.0239 11.7004C30.0587 11.7125 30.0902 11.7327 30.1158 11.7592L30.4467 12.0033ZM25.0471 10.7219C24.9283 10.62 24.7892 10.5448 24.639 10.5012C24.4888 10.4576 24.331 10.4467 24.1762 10.4691C24.0076 10.5106 23.8508 10.5903 23.7179 10.7022C23.585 10.814 23.4796 10.955 23.4098 11.1141C23.203 11.4577 23.0502 11.8311 22.957 12.2212C22.8709 12.6073 22.8503 13.0051 22.896 13.398C22.8928 13.4619 22.8928 13.5259 22.896 13.5897C22.896 13.6856 22.9483 13.7902 22.9831 13.8861C23.0106 13.972 23.0426 14.0564 23.0789 14.1389C23.0789 14.2086 23.1573 14.2348 23.2008 14.1999C23.3722 14.1325 23.5268 14.0284 23.6537 13.8948C23.7798 13.7702 23.8963 13.6362 24.002 13.4939C24.6631 12.7204 25.0329 11.7397 25.0471 10.7219Z"
          fill="#6C70F0"
        />
        <path
          d="M39.2341 12.0034L39.6347 12.2562C39.8066 12.3554 39.9698 12.4691 40.1224 12.5961C39.8785 13.1192 39.6173 13.6247 39.3212 14.139C39.0561 14.6154 38.7376 15.0599 38.3719 15.464C38.0407 15.9064 37.6577 16.3073 37.231 16.6582C36.8465 16.9662 36.4322 17.2348 35.9943 17.4602C35.5151 17.7067 34.9829 17.8324 34.4441 17.8263C34.003 17.8571 33.5628 17.7538 33.1813 17.5299C32.7915 17.3108 32.4507 17.0142 32.1798 16.6582C31.9067 16.28 31.7059 15.8544 31.5876 15.403C31.4713 14.9587 31.4564 14.494 31.544 14.0432L31.6921 13.3632C31.6791 13.2982 31.6883 13.2306 31.7182 13.1715C31.7532 13.1277 31.7987 13.0935 31.8505 13.0722C31.9023 13.0509 31.9587 13.043 32.0143 13.0494L32.4236 13.1104L33.0333 13.1976L33.8084 13.3196C33.7474 13.5637 33.6951 13.7904 33.6603 13.9996C33.6255 14.2088 33.608 14.357 33.5906 14.54C33.561 14.6809 33.561 14.8263 33.5906 14.9671C33.6318 15.1256 33.7274 15.2644 33.8606 15.3594C33.9775 15.4529 34.1206 15.5077 34.2699 15.5163C34.3432 15.5197 34.4164 15.5083 34.4852 15.4828C34.554 15.4574 34.6171 15.4184 34.6705 15.3681C34.8068 15.2346 34.8955 15.0601 34.9231 14.8713C35.0248 14.4225 34.9976 13.9541 34.8447 13.5201C34.6547 13.1007 34.4395 12.6932 34.2003 12.2998C34.1132 12.1516 34.0348 12.0121 33.9651 11.8726C33.8954 11.7332 33.8345 11.6024 33.7822 11.4716C33.4886 11.721 33.1706 11.9401 32.8329 12.1254C32.5042 12.3181 32.1492 12.462 31.7792 12.5525C31.4142 12.6267 31.0381 12.6267 30.6731 12.5525C30.266 12.4722 29.8839 12.2959 29.5583 12.0382L30.4293 10.2949C30.7858 10.3911 31.1614 10.3911 31.5179 10.2949C31.9422 10.1769 32.347 9.99779 32.7197 9.76312C33.2892 9.39086 33.8025 8.93879 34.2438 8.4207C34.2826 8.38355 34.3176 8.34267 34.3483 8.29867L34.4615 8.17663L35.1844 7.30493L36.5691 8.22893C36.6317 8.28551 36.6899 8.3467 36.7433 8.41199C36.7597 8.44751 36.7682 8.48618 36.7682 8.52531C36.7682 8.56444 36.7597 8.6031 36.7433 8.63863C36.7168 8.77249 36.6535 8.89628 36.5604 8.99602C36.4102 9.18426 36.2441 9.35924 36.064 9.51904C35.863 9.69462 35.738 9.94158 35.7156 10.2077C35.7088 10.4552 35.7626 10.7006 35.8724 10.9225C35.9903 11.1737 36.1271 11.4156 36.2817 11.646C36.4573 11.8539 36.6202 12.0722 36.7694 12.2998C36.9025 12.5491 36.9993 12.8162 37.0568 13.093C37.1244 13.3791 37.1652 13.671 37.1788 13.9647H37.231C37.3475 13.8535 37.4526 13.7309 37.5445 13.5986C37.6577 13.433 37.771 13.2673 37.8755 13.0843C37.98 12.9012 38.0671 12.7443 38.1367 12.5961L38.25 12.2998L38.3545 12.1429C38.3792 12.0864 38.4114 12.0337 38.4503 11.9859C38.4776 11.9196 38.5192 11.86 38.5722 11.8116C38.6084 11.7766 38.6536 11.7525 38.7028 11.7419C38.7638 11.7419 38.8248 11.7419 38.9118 11.8116C38.9989 11.8813 39.1034 11.9075 39.2341 12.0034Z"
          fill="#6C70F0"
        />
        <path
          d="M10.7905 24.7387L11.1911 24.9915C11.363 25.0907 11.5262 25.2045 11.6788 25.3315C11.4349 25.8545 11.1737 26.3688 10.8776 26.8744C10.6147 27.3521 10.296 27.7969 9.92828 28.1994C9.59786 28.6346 9.21462 29.027 8.7874 29.3674C8.40504 29.6783 7.99044 29.9472 7.55072 30.1694C7.07146 30.4159 6.53932 30.5416 6.00051 30.5355C5.559 30.5709 5.11749 30.4672 4.7377 30.2391C4.3479 30.02 4.00706 29.7234 3.73616 29.3674C3.46158 28.9933 3.2606 28.5702 3.14395 28.1209C3.02434 27.6805 3.00352 27.2191 3.08298 26.7698L3.23104 26.0899C3.21955 26.0411 3.21955 25.9904 3.23104 25.9417C3.26604 25.8979 3.31157 25.8638 3.36336 25.8424C3.41515 25.8211 3.4715 25.8132 3.52714 25.8196L3.93647 25.8807L4.5461 25.9678C4.78995 26.0201 5.05122 26.055 5.3212 26.0899C5.26149 26.3136 5.21496 26.5406 5.18186 26.7698C5.18186 26.9528 5.1209 27.1272 5.10348 27.319C5.07462 27.4599 5.07462 27.6052 5.10348 27.7461C5.1507 27.8993 5.24522 28.0336 5.37346 28.1296C5.49039 28.2231 5.6334 28.2779 5.78278 28.2865C5.85551 28.2916 5.92849 28.2818 5.99735 28.2578C6.0662 28.2339 6.12949 28.1962 6.1834 28.1471C6.32136 28.0113 6.41022 27.8334 6.43596 27.6415C6.57071 27.1859 6.56768 26.7006 6.42725 26.2468C6.23924 25.8235 6.02397 25.413 5.78278 25.0177C5.69569 24.8695 5.62602 24.73 5.54764 24.5905C5.46926 24.4511 5.417 24.3203 5.36475 24.1896C5.07267 24.4369 4.75772 24.6558 4.42417 24.8433C4.09338 25.0382 3.73521 25.1822 3.36167 25.2705C2.99721 25.3495 2.62008 25.3495 2.25562 25.2705C1.85027 25.1896 1.46889 25.0166 1.14087 24.7649L2.01177 23.0215C2.36828 23.1177 2.74389 23.1177 3.1004 23.0215C3.52599 22.9073 3.9314 22.7279 4.30225 22.4897C4.86978 22.1183 5.38275 21.6694 5.82633 21.1561L5.93084 21.034C5.96424 20.9895 6.00219 20.9486 6.04405 20.912L6.7669 20.0403L8.10809 21.0166L8.28227 21.1996C8.30548 21.2337 8.32134 21.2722 8.32884 21.3127C8.33634 21.3532 8.33531 21.3949 8.32582 21.435C8.29911 21.5644 8.23906 21.6846 8.15164 21.7837C7.9956 21.9695 7.82681 22.1443 7.64652 22.3067C7.44693 22.4834 7.32232 22.7297 7.29815 22.9953C7.29234 23.2455 7.34607 23.4935 7.45492 23.7188C7.5729 23.9672 7.70974 24.2062 7.86424 24.4336C8.01645 24.6491 8.15603 24.8732 8.28227 25.1048C8.41398 25.3517 8.5107 25.6158 8.56967 25.8894C8.63665 26.1756 8.67746 26.4674 8.6916 26.7611H8.74385C8.8648 26.6542 8.97032 26.5309 9.05738 26.395C9.1706 26.2293 9.28381 26.0637 9.38832 25.8894C9.49283 25.715 9.57992 25.5407 9.64959 25.4012L9.80635 25.1048L9.91086 24.9479C9.9396 24.8937 9.97159 24.8413 10.0067 24.791C10.0392 24.7276 10.0802 24.669 10.1286 24.6167C10.1669 24.5848 10.2114 24.561 10.2592 24.547C10.3202 24.547 10.3812 24.547 10.4682 24.6167C10.5733 24.6632 10.6809 24.704 10.7905 24.7387Z"
          fill="#6C70F0"
        />
        <path
          d="M15.0404 24.7649L15.441 25.0177C15.6116 25.1191 15.7746 25.2328 15.9287 25.3577C15.6501 25.9592 15.3104 26.5955 14.9098 27.2754C14.5498 27.9073 14.114 28.4928 13.6121 29.0188C13.2443 29.4413 12.7593 29.7447 12.2187 29.8905C11.7484 29.9864 11.3478 29.7423 10.9036 29.1583C10.655 28.7855 10.4806 28.3681 10.3898 27.9292C10.2689 27.3757 10.1961 26.8128 10.1721 26.2468C10.1721 25.6657 10.1721 25.0293 10.1721 24.3378C10.1721 23.6666 10.2592 22.9954 10.3463 22.3155H9.91081H9.6147C9.54241 22.3246 9.46926 22.3246 9.39697 22.3155L9.44923 20.4239H10.5901C10.5901 20.2844 10.6249 20.0578 10.6946 19.744C10.7556 19.4389 10.8078 19.1251 10.8688 18.7938C10.9298 18.4626 10.9733 18.1662 11.0256 17.8785C11.0778 17.5909 11.1039 17.3729 11.1214 17.2422L13.2551 17.5298C13.2551 17.6257 13.2028 17.8088 13.1593 18.079C13.1157 18.3492 13.0635 18.6282 13.0112 18.9507C12.959 19.2732 12.9154 19.5348 12.8806 19.8224C12.8457 20.1101 12.8109 20.2844 12.7935 20.3977H13.1593H13.4728C13.5163 20.3977 13.5686 20.4762 13.6296 20.6767C13.6916 20.899 13.7324 21.1266 13.7515 21.3566C13.7731 21.5885 13.7731 21.822 13.7515 22.054C13.7515 22.2632 13.6905 22.3678 13.6121 22.3678H13.2551H13.1244H12.4538C12.3755 22.9344 12.3058 23.4923 12.2622 24.0327C12.2187 24.5732 12.1839 25.0787 12.1752 25.532C12.1664 25.9853 12.1752 26.4037 12.1752 26.7088C12.1821 26.96 12.2509 27.2055 12.3755 27.4236C12.4364 27.5108 12.5496 27.4236 12.7151 27.2318C12.8993 26.987 13.0681 26.7308 13.2202 26.4647C13.4031 26.1684 13.5686 25.872 13.7167 25.593L14.0215 25.0439C14.0558 24.9947 14.085 24.9421 14.1086 24.887C14.1304 24.831 14.1597 24.7782 14.1956 24.7301C14.223 24.6637 14.2646 24.6042 14.3176 24.5557C14.3395 24.5328 14.3659 24.5145 14.3951 24.5021C14.4243 24.4896 14.4557 24.4832 14.4874 24.4832C14.5191 24.4832 14.5505 24.4896 14.5797 24.5021C14.6089 24.5145 14.6353 24.5328 14.6572 24.5557C14.78 24.6343 14.908 24.7042 15.0404 24.7649Z"
          fill="#6C70F0"
        />
        <path
          d="M27.9212 25.1484L28.165 25.3315C28.0692 25.532 27.9734 25.7325 27.8602 25.9504C27.747 26.1683 27.6512 26.395 27.538 26.6216L27.1896 27.2928L26.8064 27.9379C26.6855 28.1506 26.5456 28.3519 26.3884 28.5393L25.9529 29.0798C25.6936 29.3561 25.4011 29.5991 25.082 29.8033C24.9544 29.8861 24.8092 29.938 24.6579 29.9546C24.5067 29.9713 24.3537 29.9523 24.2111 29.8992C24.035 29.8402 23.873 29.7455 23.7351 29.621C23.5973 29.4966 23.4865 29.3449 23.4099 29.1757C23.3376 29.0462 23.2736 28.9123 23.2183 28.7747C23.1486 28.6178 23.0877 28.4522 23.0267 28.2778C22.8819 27.7559 22.8144 27.2155 22.8264 26.6739C22.8264 26.4124 22.8699 26.1596 22.9048 25.9068C22.9396 25.654 22.9744 25.4012 23.0267 25.1397C23.0855 24.6622 23.1816 24.19 23.3141 23.7276C23.136 23.729 22.9611 23.6807 22.809 23.5881C22.5685 24.0744 22.2475 24.5165 21.8597 24.8956C21.4829 25.2884 21.0029 25.5664 20.4749 25.6976C20.1874 25.7545 19.8916 25.7545 19.604 25.6976C19.604 25.8894 19.604 26.0899 19.604 26.2816C19.604 26.4734 19.604 26.6739 19.5431 26.8918C19.4402 27.556 19.1999 28.1914 18.8376 28.7573C18.5156 29.2784 18.062 29.7053 17.5226 29.9951C16.9436 30.2905 16.2736 30.3529 15.6501 30.1694C15.1806 30.0917 14.7576 29.8396 14.4657 29.4633C14.3038 29.2916 14.1714 29.0942 14.0738 28.8793C13.9809 28.6701 13.8938 28.4522 13.8125 28.2255C13.6809 27.7582 13.6308 27.2716 13.6645 26.7872C13.6883 26.3255 13.7702 25.8686 13.9083 25.4274C14.0381 25.1278 14.1865 24.8367 14.3525 24.5557C14.5276 24.2758 14.7288 24.0131 14.9534 23.7712C15.3919 23.2999 15.9436 22.9488 16.5559 22.7513L16.4775 22.6118L16.4078 22.4636C16.2587 22.2412 16.1524 21.9928 16.0943 21.7314C16.0574 21.5884 16.0574 21.4385 16.0943 21.2955C16.1325 21.1969 16.1992 21.1119 16.2859 21.0515L17.7926 20.3454L18.1845 21.2171C18.2194 21.3264 18.2662 21.4316 18.3238 21.5309L18.498 21.8796C18.559 22.019 18.6373 22.1759 18.7157 22.359C18.7848 22.4806 18.8665 22.5946 18.9596 22.699L19.3254 23.0825C19.446 23.2077 19.5804 23.3188 19.726 23.4138C19.8196 23.4857 19.931 23.5309 20.0482 23.5445C20.3 23.4727 20.5149 23.3075 20.6491 23.0825C20.812 22.8745 20.9467 22.6459 21.0497 22.4026C21.0637 22.3311 21.0968 22.2648 21.1455 22.2108C21.0315 22.0809 20.9294 21.9408 20.8407 21.7924C20.746 21.6384 20.6616 21.4782 20.5882 21.313C20.4682 21.0962 20.369 20.8686 20.2921 20.633C20.2581 20.4956 20.2581 20.352 20.2921 20.2146C20.3356 20.1243 20.385 20.0369 20.4401 19.9531L21.8074 19.2732C21.8703 19.5042 21.9672 19.7245 22.0948 19.927C22.1906 20.171 22.269 20.3367 22.3126 20.4326C22.5169 20.8755 22.8471 21.2484 23.2618 21.5047C23.6956 21.7302 24.1913 21.8068 24.6727 21.7227C24.84 21.7224 25.0057 21.755 25.1604 21.8185C25.2944 21.9082 25.4147 22.0168 25.5175 22.1411C25.6176 22.2773 25.6914 22.431 25.7352 22.5944C25.7877 22.7439 25.7877 22.9068 25.7352 23.0564C25.6223 23.3401 25.5292 23.6314 25.4565 23.9281C25.3781 24.207 25.3172 24.4859 25.2475 24.7998C25.1778 25.1136 25.1343 25.3751 25.0994 25.6715C25.0646 25.9678 25.0385 26.2293 25.0036 26.5431V26.8134C24.9953 26.8595 24.9953 26.9067 25.0036 26.9528C25.0036 27.1359 25.0036 27.2231 25.1082 27.2231C25.2127 27.2231 25.2475 27.1708 25.3433 27.0574L25.4652 26.8308L25.6394 26.5693C25.7011 26.4743 25.7564 26.3753 25.8049 26.2729C25.8571 26.177 25.9181 26.0811 25.9791 25.9853C26.04 25.8894 26.0749 25.7935 26.1271 25.7063L26.249 25.4535C26.249 25.3664 26.31 25.3053 26.3274 25.253L26.3884 25.131L26.4406 25.0613L26.4929 24.9915C26.4914 24.9625 26.4914 24.9334 26.4929 24.9044V24.8172C26.5254 24.7538 26.5665 24.6951 26.6148 24.6428L26.7629 24.5731C26.8311 24.5821 26.8965 24.6059 26.9545 24.6428L27.0851 24.7562L27.2941 24.8869L27.4857 25.0264C27.5507 25.0647 27.6175 25.0996 27.686 25.131L27.9212 25.1484ZM17.4703 25.6279C17.4647 25.3311 17.3707 25.0427 17.2004 24.7998C17.0329 24.8121 16.8726 24.8727 16.7388 24.9741C16.6594 25.0163 16.5862 25.0691 16.521 25.131L16.3033 25.3315C16.1805 25.4873 16.0671 25.6503 15.9637 25.8196C15.8799 25.9681 15.8071 26.1225 15.7459 26.2816C15.7459 26.3775 15.7024 26.5431 15.6676 26.7698C15.6415 26.9869 15.6415 27.2064 15.6676 27.4236C15.6954 27.624 15.7636 27.8168 15.8679 27.9902C15.8815 28.0302 15.903 28.067 15.9312 28.0984C15.9593 28.1299 15.9935 28.1553 16.0318 28.1733C16.07 28.1912 16.1114 28.2012 16.1536 28.2026C16.1958 28.2041 16.2378 28.1971 16.2772 28.1819C16.4111 28.1611 16.5383 28.1093 16.6487 28.0306C16.759 27.9519 16.8495 27.8485 16.913 27.7287C17.1056 27.4173 17.2523 27.0796 17.3484 26.7262C17.4348 26.3668 17.4728 25.9974 17.4616 25.6279H17.4703Z"
          fill="#6C70F0"
        />
        <path
          d="M34.7576 25.3751C34.4868 25.8581 34.1657 26.311 33.7996 26.7263C33.4213 27.1575 32.9739 27.5228 32.4759 27.8072C31.9433 28.1023 31.3427 28.2525 30.7341 28.243C29.8686 28.2822 29.0093 28.08 28.252 27.659C27.6663 27.317 27.1777 26.8309 26.8324 26.2468C26.5125 25.6865 26.311 25.0664 26.2402 24.425C26.1579 23.8468 26.1579 23.2598 26.2402 22.6816C26.3485 22.0854 26.5799 21.5183 26.9195 21.0166C27.207 20.5961 27.6006 20.2592 28.0604 20.0403C28.5873 19.7836 29.1572 19.627 29.7412 19.5783C30.1769 19.5619 30.6116 19.63 31.0215 19.7788C31.3878 19.9081 31.7229 20.113 32.005 20.3803C32.2871 20.6476 32.5098 20.9714 32.6587 21.3304C32.814 21.6819 32.8941 22.062 32.8939 22.4462C32.9051 22.8599 32.8059 23.2692 32.6065 23.6317C32.4232 23.9657 32.1779 24.2616 31.8836 24.5034C31.5987 24.7319 31.2779 24.9115 30.9344 25.0352C30.6251 25.1515 30.298 25.2134 29.9677 25.2182C29.5328 25.2141 29.1033 25.1222 28.7049 24.948C28.9056 25.3771 29.2341 25.7334 29.6454 25.9679C30.0266 26.181 30.471 26.2521 30.8995 26.1684C31.4076 26.0545 31.8764 25.8079 32.2581 25.4536C32.7815 24.9722 33.2124 24.3991 33.5297 23.7625C33.626 23.6026 33.7464 23.4585 33.8867 23.3354C34.0086 23.2307 34.209 23.2743 34.4789 23.4661L34.9666 23.8061C35.1321 23.9194 35.2715 24.024 35.4021 24.1024C35.21 24.5378 34.9949 24.9626 34.7576 25.3751ZM29.001 21.9581C28.8277 22.1779 28.6869 22.4216 28.5829 22.6816L28.7658 22.8995C28.8226 22.9658 28.8903 23.0219 28.9661 23.0651C29.1566 23.245 29.402 23.3555 29.6628 23.3789C29.8442 23.3844 30.0211 23.3223 30.1593 23.2046C30.2922 23.0731 30.3857 22.9071 30.4292 22.7252C30.4726 22.5417 30.4726 22.3507 30.4292 22.1673C30.3908 21.9968 30.3064 21.84 30.1854 21.714C30.1145 21.653 30.0303 21.6094 29.9396 21.5867C29.8489 21.564 29.7541 21.5628 29.6628 21.5832C29.4073 21.6271 29.174 21.7561 29.001 21.9494V21.9581Z"
          fill="#6C70F0"
        />
        <path
          d="M43.033 31.0058L43.0327 31.0057C40.9185 30.257 39.1878 28.6983 38.2216 26.6724C37.2554 24.6464 37.1329 22.3191 37.881 20.2027C38.6291 18.0862 40.1865 16.354 42.2104 15.3871C44.2341 14.4202 46.5585 14.2975 48.6725 15.0459C49.0434 15.1787 49.4041 15.3367 49.7522 15.5187C48.318 15.7245 46.943 16.2592 45.7383 17.0898C44.0981 18.2206 42.8576 19.8418 42.1942 21.7212C41.5273 23.6016 41.4714 25.6448 42.0345 27.5589C42.4491 28.9681 43.1836 30.2542 44.1723 31.3209C43.7862 31.2432 43.4054 31.138 43.033 31.0058Z"
          fill="white"
          stroke="#D1D5DB"
        />
        <path
          d="M49.9725 25.811C49.8244 25.9766 48.1784 24.9393 48.1784 24.9393C48.1784 24.9393 46.6979 26.1074 46.4366 25.9418C46.1754 25.7761 46.6805 23.9717 46.6805 23.9717C46.6805 23.9717 45.2 23.0041 45.2 22.6555C45.2 22.3068 47.2204 22.3155 47.2204 22.3155C47.2204 22.3155 47.7604 20.4937 48.013 20.4937C48.2655 20.4937 48.971 22.237 48.971 22.237C48.971 22.237 50.7128 22.0627 50.9479 22.4288C51.1831 22.7949 49.598 23.8846 49.598 23.8846C49.598 23.8846 50.1293 25.6454 49.9725 25.811Z"
          fill="#FACC15"
        />
      </g>
      <defs>
        <clipPath id="clip0_1128_4961">
          <rect width="51.3136" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SmallLogoIcon
