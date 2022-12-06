

function NewConcertForm() {
    return (
        <form>
            <h2>Add a Concert</h2>
            {/* 
             :headline:subtitle:image:date:doors:start_time:ticket_price
            */}
            <label for="headline">Title/Headline</label>
            <input type="text" name="headline" id="headline"></input>
            <label for="subtitle">Subtitle</label>
            <input type="text" name="subtitle" id="subtitle"></input>
            <label for="image">Image URL</label>
            <input type="text" name="image" id="image"></input>
            
        </form>
    )
}