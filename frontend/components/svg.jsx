import React from 'react';

const getPath = (iconName, props) => {
  switch (iconName) {
    case 'smile':
      return <path {...props} d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.508 13.941c-1.513 1.195-3.174 1.931-5.507 1.931-2.335 0-3.996-.736-5.509-1.931l-.492.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.492-.493zm.492-3.939l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z" />;
    case 'skinny-plus':
      return <path {...props} d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />;
    case 'skinny-down':
      return <path {...props} d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />;
    case 'fun':
      return <path {...props} d="M13.5 20c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-10.502 4c-.598 0-2.429-1.754-2.747-4.304-.424-3.414 2.124-5.593 4.413-5.87.587-1.895 2.475-4.684 6.434-4.77.758-1.982 3.409-4.507 6.84-3.186 1.647.634 3.101 2.101 3.705 3.737.231.624-.71.965-.937.347-.51-1.378-1.737-2.615-3.127-3.151-2.577-.99-4.695.731-5.422 2.298 1.107.12 2.092.455 2.755.889.909.594 1.473 1.558 1.508 2.577.031.889-.33 1.687-.991 2.187-.654.496-1.492.643-2.298.404-.966-.286-1.748-1.076-2.143-2.169-.287-.793-.384-1.847-.178-2.921-3.064.185-4.537 2.306-5.075 3.742 1.18.102 2.211.574 2.831 1.012.959.676 1.497 1.6 1.513 2.599.015.859-.363 1.664-1.011 2.155-.608.46-1.535.599-2.363.348-.961-.289-1.7-1.041-2.079-2.118-.255-.723-.375-1.776-.204-2.919-1.631.361-3.512 1.995-3.178 4.685.18 1.448 1.008 2.888 2.015 3.502.43.261.242.926-.261.926zm17.308-10.026l1.205 2.225 2.489.459-1.744 1.833.333 2.509-2.283-1.092-2.283 1.092.333-2.509-1.744-1.833 2.489-.459 1.205-2.225zm-14.85.822c-.202 1.024-.128 1.993.113 2.678.347.984.966 1.355 1.424 1.492.604.183 1.175.036 1.472-.187.388-.294.624-.808.614-1.34-.011-.673-.398-1.313-1.09-1.801-.545-.385-1.479-.803-2.533-.842zm6.373-4.716c-.226 1.018-.11 1.99.099 2.569.287.79.828 1.356 1.486 1.55.501.148 1.014.06 1.411-.242.398-.301.615-.795.596-1.355-.025-.705-.409-1.353-1.056-1.775-.511-.334-1.448-.657-2.536-.747zm-7.329-10.08l1.468 2.711 3.032.558-2.124 2.234.405 3.057-2.781-1.331-2.781 1.331.405-3.057-2.124-2.234 3.032-.558 1.468-2.711zm17 0c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />;
    case 'round-tri':
      return <path {...props} d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z" />;
    case 'notify':
      return <path {...props} d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />;
    case 'team':
      return <path {...props} d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />;
    case 'edit':
      return <path {...props} d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />;
    case 'carrot':
      return <path {...props} d="M6 0l12 12-12 12z" />;
    case 'check':
      return <path {...props} d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />;
    case 'project':
      return <path {...props} d="M22 3v21h-20v-21h4.667l-2.667 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 15h10v1h-10v-1zm0-1h10v-1h-10v1zm0-2h10v-1h-10v1zm0-2h10v-1h-10v1z" />;
    case 'desc':
      return <path {...props} d="M9 21h-9v-2h9v2zm6.695-2.88l-3.314-3.13-1.381 1.47 4.699 4.54 8.301-8.441-1.384-1.439-6.921 7zm-6.695-1.144h-9v-2h9v2zm8-3.976h-17v-2h17v2zm7-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />;
    case 'arrow2':
      return <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />;
    case 'calendar':
      return <path {...props} d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/>;
    case 'not-done':
      return <path {...props} d="M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11 4.935-11 11-11zm0-1c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />;
    case 'done':
      return <path {...props} d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />;
    case 'x':
      return <path {...props} d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
    case 'trash':
      return <path {...props} d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/>;
    case 'travel':
      return <path {...props} d="M3.691 10h6.309l-3-7h2l7 7h5c1.322-.007 3 1.002 3 2s-1.69 1.993-3 2h-5l-7 7h-2l3-7h-6.309l-2.292 2h-1.399l1.491-4-1.491-4h1.399l2.292 2" />;
    case 'plus':
      return <path {...props} d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />;
    case 'warn':
      return <path {...props} d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 5h3l-1 10h-1l-1-10zm1.5 14.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />;
    case 'arrow':
      return <path {...props} d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />;
    case 'cal':
      return <path {...props} d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />;
    case 'bills': 
      return <path {...props} d="M4 8v12h20v-12h-20zm10 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm.2-2.021v.421h-.4v-.4c-.414-.007-.843-.105-1.2-.291l.183-.657c.382.148.891.305 1.29.216.46-.104.555-.577.046-.806-.373-.172-1.512-.321-1.512-1.296 0-.545.415-1.034 1.193-1.141v-.425h.4v.407c.289.007.615.058.978.168l-.146.658c-.307-.107-.647-.206-.977-.185-.595.035-.648.551-.232.767.685.321 1.578.561 1.578 1.418 0 .687-.538 1.054-1.201 1.146zm6.8-9.979h-19v11h-2v-13h21v2z" />
    case 'school':
      return <path {...props} d="M7.902 14c-1.722-1.39-2.902-3.968-2.902-6.037 0-3.094 2.158-4.89 4.187-4.961.841-.013 1.729.199 2.394.57-.175-1.278-.747-2.259-1.344-2.958l1.367-.614c.283.407.572 1.129.761 1.979.383-.695.848-1.262 1.475-1.628.669-.391 1.778-.412 2.518-.272-.187.658-.577 1.513-1.491 2.075-.562.345-1.467.522-2.384.453.042.283.073.574.087.867.682-.364 1.44-.484 2.243-.472 2.029.071 4.187 1.867 4.187 4.961 0 2.069-1.18 4.647-2.902 6.037h6.902v2h-19.5c-.276 0-.5.224-.5.5s.224.5.5.5h19.5v2h-18.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h18.5v2h-18.5c-1.932 0-3.5-1.568-3.5-3.5 0-.83.29-1.593.773-2.193-.476-.455-.773-1.097-.773-1.807 0-1.38 1.12-2.5 2.5-2.5h4.402zm15.098 7h-18v-1h18v1zm-12.624-15.6c-1.643 1.229-2.035 3.45-.42 6.6-.755-.402-2.37-2.047-2.352-3.945.016-1.676 1.413-2.73 2.772-2.655z" />
    case 'work':
      return <path {...props} d="M9 2c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm12 5h-18c-1.657 0-3 1.343-3 3v9c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3v-9c0-1.657-1.343-3-3-3zm-.5 11h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5zm0-3h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5zm0-3h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5z" />
    case 'family':
      return <path {...props} d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
    case 'task':
      return <path {...props} d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>
    case 'home':
      return <path {...props} d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
    case 'profile':
      return <path {...props} d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />;
    case 'search':
      return <path {...props} d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
    case 'big-arrow':
      return <path {...props} d="M5,2.25,7.293,0,16.25,9,7.293,18,5,15.75,11.75,9Z" />;
    case 'message':
      return <path {...props} d="M0,3V31.5H38V3ZM34.07,6.167,19,18.379,3.93,6.167H34.07ZM3.167,28.333V9.623L19,22.454,34.833,9.623v18.71Z" />;
    case 'menue':
      return <path {...props} d="M6.333,33.667H0V27.333H6.333Zm0-19H0V21H6.333ZM6.333,2H0V8.333H6.333Zm4.75,0V8.333H38V2Zm0,19H38V14.667H11.083Zm0,12.667H38V27.333H11.083Z" />;
    case 'list':
      return <path {...props} d="M34.833,3.167V34.833H3.167V3.167ZM38,0H0V38H38ZM31.667,11.083H19v1.583H31.667Zm0,7.917H19v1.583H31.667Zm0,7.917H19V28.5H31.667Zm-16.65-17.9-1.124-1.1L9.85,12.044l-2.437-2.3L6.308,10.87l3.563,3.38Zm0,7.917-1.124-1.1L9.852,19.961l-2.437-2.3L6.31,18.785l3.561,3.382Zm0,7.917-1.124-1.1L9.852,27.878l-2.437-2.3L6.31,26.7l3.561,3.382Z" />;
    case 'settings':
      return <path {...props} d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />;

  }
}

const SVG = ({
  name = '',
  w = '',
  h = '',
  fill = '',
  className = '',
  transform = "",
  rotate="",
  rule='',
  id = ''
}) => (
    <svg
      width={w}
      height={h}
      className={className}
      transform={rotate}
      viewBox={`0 0 ${w} ${h}`}
      id={id}
      fillRule={rule}
      clipRule={rule}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getPath(name, { fill, transform })}
    </svg>
  );

  export default SVG;