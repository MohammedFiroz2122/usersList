import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  data: any;
  nodata:any=false

  constructor(private apiCall:ApiCallService) { }

  ngOnInit(): void {
  }
  search(searchText:any){
    this.nodata = false
    this.apiCall.search(searchText).subscribe((result)=>{
      console.log(result);
      
      if(!result){
        this.nodata = true
      }
      this.data = result
      
      
    })
  }
}
