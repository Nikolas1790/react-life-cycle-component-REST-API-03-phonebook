import { FindContact } from "components/App.styled"


export const Filter =({handleImputFilter, filter}) => {
    return(
        <div>
             <FindContact>Find contacts by name</FindContact>
             <input type="text"
                  name="filter"
                  onChange={handleImputFilter}
                  value={filter}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>

        </div>
    )
}

