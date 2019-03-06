import React from 'react';
import Grid from '../template/grid'
import IconButton from '../template/iconButton';

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
        {/* <div className='col-xs-12 col-sm-9 col-md-10'> */}
            <input 
                id='description' 
                className='form-control' 
                placeholder='Adicione uma tarefa'
                onChange={props.handleChange}
                value={props.description}
            />
        {/* </div> */}
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton 
                style='primary' 
                icon='plus'
                onClick={props.handleAdd}
                
            />
        {/* <div className='col-xs-12 col-sm-3 col-md-2'> */}
            {/* <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button> */}
        {/* </div> */}
        </Grid>
    </div>
)