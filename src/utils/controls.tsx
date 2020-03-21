import {h} from '@stencil/core'

export const PlayButton = props => <span class={props.class} tabindex={props.tabindex || 1} onClick={props.onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
       viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve" class=""><g><g>
	<path
    d="M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995   C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012   C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993   c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993z    M25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	<path
    d="M32,0C14.3268995,0,0,14.3268995,0,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62   C15.4579,62,2,48.542099,2,32C2,15.4580002,15.4579,2,32,2c16.5419998,0,30,13.4580002,30,30C62,48.542099,48.5419998,62,32,62z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
</g></g> </svg>
</span>;

export const PauseButton = props => <span class={props.class} tabindex={1} onClick={props.onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
       viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve" class=""><g><g>
	<path
    d="M32,0C14.3268995,0,0,14.3268995,0,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62   C15.4580002,62,2,48.542099,2,32C2,15.4580002,15.4580002,2,32,2c16.542099,0,30,13.4580002,30,30C62,48.542099,48.542099,62,32,62   z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	<path
    d="M40,18h-4c-1.1044998,0-2,0.8953991-2,2v24c0,1.104599,0.8955002,2,2,2h4c1.104599,0,2-0.895401,2-2V20   C42,18.8953991,41.104599,18,40,18z M40,44h-4V20h4V44z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	<path
    d="M28,18h-4c-1.1044998,0-2,0.8953991-2,2v24c0,1.104599,0.8955002,2,2,2h4c1.1046009,0,2-0.895401,2-2V20   C30,18.8953991,29.1046009,18,28,18z M28,44h-4V20h4V44z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
</g></g> </svg>
</span>;

export const SoundOffButton = props => <span class={props.class} tabindex={1} onClick={props.onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
       y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve"
       class=""><g><g>
	<path
    d="M55.0953751,31.0069008l4.2929001-4.2929001c0.3905983-0.3907013,0.3905983-1.0235004,0-1.4141006   s-1.0233994-0.3906002-1.4140015,0l-4.2929993,4.2929993l-4.2929993-4.2929993   c-0.3905983-0.3906002-1.0233994-0.3906002-1.4140015,0c-0.3906975,0.3906002-0.3906975,1.0233994,0,1.4141006l4.2929001,4.2929001   l-4.2929001,4.2929993c-0.3906975,0.3905983-0.3906975,1.0233994,0,1.4141006   c0.1953011,0.1953011,0.4511032,0.2929001,0.7070007,0.2929001c0.2559013,0,0.5116997-0.097599,0.7070007-0.2929001   l4.2929993-4.2929993l4.2929993,4.2929993c0.1953011,0.1953011,0.4511032,0.2929001,0.7070007,0.2929001   c0.2559013,0,0.5116997-0.097599,0.7070007-0.2929001c0.3905983-0.3907013,0.3905983-1.0235023,0-1.4141006L55.0953751,31.0069008z   "
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	<path
    d="M40.9559746,10.0068998c-0.2562981,0-0.518898,0.0480003-0.7775002,0.1513004l-23.2776985,9.3035002v0.0133991   c-3.9111013,0.1193008-7.1570005,2.8481998-8.0629005,6.5083008C6.2279749,26.7413998,4.3187752,29.1457005,4.3187752,32   c0,2.8544006,1.9092999,5.2587013,4.5191994,6.0167007c0.9058008,3.660099,4.1517,6.3889999,8.0628014,6.5083008v0.0133972   l23.2776985,9.3034019c0.2584991,0.1032982,0.5212021,0.1512985,0.7775002,0.1512985   c1.1044006,0,2.0877991-0.8918991,2.0877991-2.0918007v-39.802597   C43.0437737,10.8990002,42.060276,10.0068998,40.9559746,10.0068998z M8.5771751,35.6632004   C7.2855749,34.9513016,6.4084749,33.5760994,6.4084749,32c0-1.5760002,0.8771-2.9512997,2.1687002-3.6630993V35.6632004z    M16.9007759,42.4432983c-3.181201-0.1279984-5.7749004-2.5558968-6.1744013-5.6611977   c-0.0279999-0.2750015-0.0594997-0.549202-0.0594997-0.8316994v-7.9007015c0-0.2826004,0.0314999-0.5569,0.0594997-0.8318996   c0.3995008-3.1051006,2.9932003-5.5331001,6.1744013-5.6611004V42.4432983z M40.9540749,51.9012985l-21.9634991-8.7781982   V20.8770008l21.9634991-8.7778006V51.9012985z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
</g></g> </svg>
</span>;

export const SoundOnButton = props => <span class={props.class} tabindex={1} onClick={props.onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
       y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve"><g><g>
	<path
    d="M47.906311,22.5869999c-0.4071999,0.4071999-0.4071999,1.0692997,0.0009995,1.4775009   c1.8964005,1.8964996,2.9414024,4.4188995,2.9414024,7.1015987c0,2.6835022-1.045002,5.2060013-2.9414024,7.1025009   c-0.4081993,0.4081993-0.4081993,1.0703011-0.0009995,1.4775009c0.2041245,0.2040977,0.4717026,0.3066978,0.7392006,0.3066978   c0.267601,0,0.535202-0.1026001,0.7383003-0.3056984c2.2929993-2.2919998,3.5546989-5.3389015,3.5546989-8.5810013   c0-3.2412987-1.2616997-6.2880993-3.5546989-8.5800991C48.9776115,22.1777992,48.3145103,22.1786995,47.906311,22.5869999z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	<path
    d="M57.3760109,16.3125c-0.4081993-0.4062004-1.0702972-0.4062004-1.4785004,0   c-0.4071999,0.4081993-0.4071999,1.0704002,0,1.4785995c7.375,7.375,7.375,19.3759003,0,26.7509003   c-0.4071999,0.4081993-0.4071999,1.0703011,0,1.4785004c0.2041016,0.2041016,0.4717026,0.3056984,0.7392998,0.3056984   c0.2675018,0,0.5351028-0.1024971,0.7392006-0.3056984C65.5645142,37.830101,65.5645142,24.5030003,57.3760109,16.3125z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	<path
    d="M37.119812,10.0068998c-0.2562981,0-0.518898,0.0480003-0.7773781,0.1513004l-23.2777214,9.3035002v0.0133991   c-3.9111996,0.1193008-7.1570992,2.8481998-8.0629997,6.5083008C2.3919132,26.7413998,0.4826133,29.1457005,0.4826133,32   c0,2.8544006,1.9092999,5.2587013,4.5192003,6.0167007c0.9057999,3.660099,4.1516995,6.3889999,8.0628986,6.5083008v0.0133972   l23.2777214,9.3034019c0.2583771,0.1032982,0.5211792,0.1512985,0.7773781,0.1512985   c1.1044006,0,2.0879021-0.8918991,2.0879021-2.0918007v-39.802597   C39.2077141,10.8990002,38.2241135,10.0068998,37.119812,10.0068998z M2.5724354,32   c0-1.5760002,0.8770001-2.9512997,2.1685777-3.6630993v7.3262997C3.4494355,34.9513016,2.5724354,33.5760994,2.5724354,32z    M6.890213,36.7821007c-0.0279999-0.2750015-0.0594997-0.549202-0.0594997-0.8316994v-7.9007015   c0-0.2826004,0.0314999-0.5569,0.0594997-0.8318996c0.3994999-3.1051006,2.9932222-5.5331001,6.1744995-5.6611004v20.8865986   C9.8834352,42.3153,7.2897129,39.8874016,6.890213,36.7821007z M37.1180115,51.9012985l-21.9635773-8.7781982V20.8770008   l21.9635773-8.7778006V51.9012985z"
    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
</g></g> </svg>
</span>;
