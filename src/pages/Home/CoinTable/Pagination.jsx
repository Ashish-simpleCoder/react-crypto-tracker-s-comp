import { memo} from "react"
import styled from "styled-components"
import CryptoState from "../../../context/CryptoCtx"

const Pagination = memo(()=>{
    const {TABLE_COINS, active_page, setPage} = CryptoState()
    const total_pages = TABLE_COINS.length / 10
    let arr = []     //creating it for handling showing the total pages and changing the pages
    for(let i =0;i<total_pages;i++){
        arr.push(i+1)
    }
    // just do the math to find out the pagination
    // formula made by Ashish-simpleCoder
    // if user wants to change page of coin then developer has to define something
    // and that thing is below
    const changePage = (page_number) => setPage({
        start : (page_number - 1) * total_pages,
        end : (page_number * total_pages) - 1,
        active_page:page_number,
    })

    return(
        <StyledPagination>
            { arr.map((page_numb)=>{
                return(
                    <List
                        key={page_numb}
                        text={page_numb}
                        handleClick={changePage}
                        style_cls={(page_numb === active_page)&& 'active_page_styles'}
                    />
                )
            }) }
        </StyledPagination>
    )
})
export default Pagination


const List = memo(({text, handleClick, style_cls}) => {
    return(
        <li onClick={()=>handleClick && handleClick(text)} className={style_cls ? style_cls : ''}>{text}</li>
    )
})

const StyledPagination = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:1rem;
    li{
        color:var(--prm-clr);
        &:hover{
            background: var(--secondary-clr);
            color:var(--prm-clr);
            border-radius: 0.3rem;
        }
    }
    .active_page_styles{
        background:var(--secondary-clr);
        color:var(--prm-clr);
    }
`