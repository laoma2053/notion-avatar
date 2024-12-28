import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <div className="flex justify-center">
        <a
          className="transition hover:underline"
          href="https://notion.cm/"
        >
          Notion中文新社区
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">
        <a
          href="https://abstractlab.gumroad.com/l/noto-avatar"
          className="hover:underline"
        >
          &copy;{` 插画`}
        </a>
        {`由 `}
        <a href="https://twitter.com/felix12777" className="hover:underline">
          {`Felix Wong `}
        </a>
        {`设计且基于 `}
        <a
          className="hover:underline"
          href="https://creativecommons.org/publicdomain/zero/1.0/"
        >
          {`CC0 `}
        </a>
        {`协议`}
      </div>
    </footer>
  );
}
