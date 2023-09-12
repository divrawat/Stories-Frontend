import dynamic from "next/dynamic"



const Ads =()=>{
    return(
        <>
        
        <amp-story-page id={`page${story.slides.length + 1}`} i-amphtml-layout="container" >

          <amp-story-grid-layer template="fill" class="i-amphtml-element i-amphtml-layout-container i-amphtml-story-layer i-amphtml-built i-amphtml-layout" i-amphtml-layout="container">

            <amp-ad type="adsense" data-ad-client="ca-pub-1721485376950080" data-ad-slot="6021303939" layout="fill" data-amp-slot-index="1" data-a4a-upgrade-type="amp-ad-network-adsense-impl" ></amp-ad>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="fill" class="i-amphtml-element i-amphtml-layout-container i-amphtml-story-layer i-amphtml-built i-amphtml-layout" i-amphtml-layout="container"><div class="i-amphtml-glass-pane"></div></amp-story-grid-layer>

        </amp-story-page>
        
        
        </>
    )
}











export default dynamic(() => Promise.resolve(Ads), { ssr: false })