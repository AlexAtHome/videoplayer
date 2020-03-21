import {h} from '@stencil/core'

export const PlayButton = props => <span class={props.class} tabindex={1} onClick={props.onClick}>
  <svg height="64px" viewBox="0 0 480 480" width="64px"
       xmlns="http://www.w3.org/2000/svg">
    <path
      d="m240 8c-128.128906 0-232 103.871094-232 232s103.871094 232 232 232 232-103.871094 232-232-103.871094-232-232-232zm-80 328v-192l192 96zm0 0"
      fill="#57a4ff"/>
    <g fill="#1e81ce">
      <path
        d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm0 464c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.140625 123.652344-100.347656 223.859375-224 224zm0 0"/>
      <path
        d="m355.574219 232.839844-192-96c-2.480469-1.238282-5.425781-1.105469-7.78125.351562-2.359375 1.460938-3.792969 4.035156-3.792969 6.808594v192c-.015625 2.78125 1.414062 5.367188 3.773438 6.835938 2.363281 1.46875 5.316406 1.605468 7.800781.363281l192-96c2.71875-1.351563 4.433593-4.125 4.433593-7.160157 0-3.03125-1.714843-5.804687-4.433593-7.160156zm-187.574219 90.214844v-166.109376l166.113281 83.054688zm0 0"/>
    </g>
  </svg>
</span>
