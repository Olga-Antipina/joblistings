// import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../store/filters/filters-actions';
// import { selectVisiblePositions } from '../store/positions/positions-selectors';
// import { selectFilters } from '../store/filters/filters-selectors';
import { JobPosition } from './JobPosition';
import './JobList.css';
import { Component } from 'react';
import { connect } from 'react-redux';


// export const JobList = () => {
//     const dispatch = useDispatch();
//     const filters = useSelector(selectFilters);
//     const positions = useSelector((state) => selectVisiblePositions(state, filters));

//     const handleAddFilter = (filter) => {
//         dispatch(addFilter(filter));
//     };

//     return (
//         <div className='list_container'>
//             {positions.map((item) => {
//                 return <JobPosition
//                     key={item.id}
//                     handleAddFilter={handleAddFilter}
//                     {...item} />
//             })}
//         </div>
//     );
// };


class _JobList extends Component {
    render() {
        const selectVisiblePositions = (filters = []) => {
            if (filters.length === 0) {
                return this.props.positions;
            }
            return this.props.positions.filter((pos) => {
                const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
                return filters.every((filter) => posFilters.includes(filter));
            })
        }
        return (
            <div className='list_container' >
                {
                    selectVisiblePositions(this.props.filters).map((item) => {
                        return <JobPosition
                            key={item.id}
                            handleAddFilter={this.props.add}
                            {...item} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters,
    positions: state.positions,
})

const mapDispatchToProps = {
    add: addFilter,
}

export const JobList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_JobList);