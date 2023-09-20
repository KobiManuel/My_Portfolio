const useScrollHandler = (pageContainerRef, pageRef) => {
  const handleScroll = (direction) => {
    const pageContainer =
      pageContainerRef.current?.querySelector(".devtool-pages");
    if (!pageContainer) return;

    const currentScrollTop = pageContainer.scrollTop;
    const pageHeight = window.innerHeight;
    let targetScrollTop;

    if (direction === "up") {
      targetScrollTop = currentScrollTop - pageHeight;
    } else if (direction === "down") {
      targetScrollTop = currentScrollTop + pageHeight;
    }

    pageContainer.scrollTo({ top: targetScrollTop, behavior: "smooth" });
  };

  const handleArrowButtonClick = (event) => {
    const pagesContainer = pageRef?.current?.querySelector(".pages");
    if (!pagesContainer) return;

    const currentScrollTop = pagesContainer?.scrollTop;
    const pageHeight = window.innerHeight;
    let targetScrollTop;

    if (event.keyCode === 38) {
      targetScrollTop = currentScrollTop - pageHeight;
    } else if (event.keyCode === 40) {
      targetScrollTop = currentScrollTop + pageHeight;
    }
    pagesContainer.scrollTo({ top: targetScrollTop, behavior: "smooth" });
  };

  return { handleScroll, handleArrowButtonClick };
};

export default useScrollHandler;
