import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import KeenSlider from "keen-slider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  @ViewChild("slider", { static: true })
  slider: ElementRef<HTMLDivElement>;

  ngOnInit() {
    new KeenSlider(this.slider.nativeElement, {
      loop: true
    });
  }
}
