/**The open and close tag in each section 
 * @example <skill>content </skills>
 *  */
const OpenCloseTags = ({ text, children, id }: { text: string, children: any, id: string }) => {
  return (
    <>
      <section id={id}>
        <h2><span> &lt; </span> {text} <span> &gt; </span></h2>
        {children}
        <h2 ><span> &lt;/ </span> {text} <span> &gt; </span></h2>
      </section >
      <style jsx>{`
        section{

          min-height: 100vh;
          height: content;
          background-color: var(--background);
          display: flex;
          flex-direction: column;
          position: relative;
          justify-content: space-between;
          align-items: center;
          overflow-x: hidden;
          overflow-y: hidden;
          padding: 0 3rem;
        }
        h2 {
          color: var(--grey);
          font-size: 30px;
          margin-left: 4%;
          align-self: flex-start;
        }
        span {
          color: rgba(160, 28, 201, 0.9);
        }
        @media(max-width:400px){
          section{
            padding:1rem 0rem;
          }
        h2 {
          font-size: 26px;
        }
        }
  `}</style>
    </>
  )
}

export default OpenCloseTags
