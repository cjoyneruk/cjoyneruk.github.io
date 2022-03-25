// Get section elements and headers
let sections = Array.prototype.slice.call(document.getElementsByTagName('section'))
let section_headers = Array.prototype.slice.call(document.getElementsByClassName('section-header'))

const gap = 10;
const header_height = 50;

function scrollClass() {
    
    // Compute Y offsets
    const offsets = sections.map((el) => el.offsetTop)

    section_headers.forEach((header, index, array) => {
        
        let sticky_start = index==0 ? gap : gap + header_height

        let y = window.scrollY - (offsets[index] - sticky_start)

        if (y > 0) {

            header.classList.add("sticky")
            
            let top_pos = Math.max(sticky_start-y, 10)
            header.style.top = `${top_pos}px`

            if (index>0) {

                let previous_header = array[index-1]
                let prev_header_pos = gap - y
                previous_header.style.top = `${prev_header_pos}px`
            }

        } else {
            header.classList.remove("sticky")
        }

    })

}

window.onscroll = scrollClass;
