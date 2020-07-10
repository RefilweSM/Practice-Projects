const tabs = document.querySelectorAll('[data-tab-target]')
const tabsContents = document.querySelectorAll(['data-tab-content'])

tabs.forEach(tab => {
    tabs.addEventListener('click', () =>{
      const target = document.querySelector(tab.CDATA_SECTION_NODE.tabTarget)
      tabsContents.forEach(tabContent => {
          tabContent.classlist.remove('active')
      })
      tabsContents.forEach(tab => {
        tab.classlist.remove('active')
    })
      tab.classlist.add('active')  
      target.classlist.add('active')

    } )
})