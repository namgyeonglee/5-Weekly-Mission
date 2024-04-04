import { useState } from 'react';

export function useInput(initKeyword) {
  const [keyword, setKeyword] = useState(initKeyword || '');

  const handleKeywordChange = (e) => {
    const nextKeyword = e.target.value;
    setKeyword(nextKeyword);
  }

  return [
    keyword,
    handleKeywordChange,
  ];
}

export default useInput;