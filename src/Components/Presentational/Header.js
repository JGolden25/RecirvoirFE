import React from 'react';

export const Header = props => {
    
    const displayCreateNoteForm = e => {
        e.currentTarget.parentElement.parentElement.classList.add('display');
    }

    const hideCreateNoteForm = e => {
        e.currentTarget.parentElement.parentElement.parentElement.classList.remove('display');
        e.currentTarget.parentElement.parentElement.reset();
        e.currentTarget.parentElement.parentElement.querySelector('textarea').style.height = "25px";
    }
    
    return (
        <section className="new-note" >
            <form>
                <input name="title" placeholder="Dish" onChange={e => props.handleInput(e)}/>
                <textarea name="textBody" onClick={displayCreateNoteForm} onFocus={displayCreateNoteForm} onChange={e => props.handleInput(e)} placeholder="Recipe Description..."></textarea>
                <textarea name="recipetime" onClick={displayCreateNoteForm} onFocus={displayCreateNoteForm} onChange={e => props.handleInput(e)} placeholder="Preparation Time (in minutes)..."></textarea>
                <textarea name="ingredients" onClick={displayCreateNoteForm} onFocus={displayCreateNoteForm} onChange={e => props.handleInput(e)} placeholder="Ingredients"></textarea>
                <textarea name="steps" onClick={displayCreateNoteForm} onFocus={displayCreateNoteForm} onChange={e => props.handleInput(e)} placeholder="Steps"></textarea>
                <div className="buttons">
                    <div className="button create" onClick={(e) => {props.assembleNote(props.note); hideCreateNoteForm(e)}}>Add Recipe</div> 
                    <div className="button close" onClick={hideCreateNoteForm}>Close</div>
                </div>
            </form>
        </section>
    )
}